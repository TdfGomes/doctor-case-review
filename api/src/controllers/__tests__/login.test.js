const { login } = require('../login')
const { mockResponse } = require('../../utils/test-utils')
const { getDoctorByUserName } = require('../../services/doctor')
const { generateToken } = require('../../services/auth')
const { verify } = require('../../utils/hashPwd')
const ApiError = require('../../utils/error')

jest.mock('../../services/doctor')
jest.mock('../../services/auth')
jest.mock('../../utils/hashPwd')

describe('Login Controller', () => {
  const doctor = {
    username: 'some user',
    password: 'super pass',
  }
  const res = mockResponse()
  const fullname = 'Dr SomeOne'
  const next = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should login sucessfully', async () => {
    const req = {
      body: {
        ...doctor,
      },
    }
    const payload = { token: 'somebigtoken', doctor: fullname }

    getDoctorByUserName.mockResolvedValueOnce({ ...doctor, fullname })
    verify.mockResolvedValueOnce(true)
    generateToken.mockResolvedValueOnce(payload.token)

    await login(req, res, next)

    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalled()
    expect(res.send).toHaveBeenCalledWith(payload)
  })

  it('should call ApiError for required fields', async () => {
    const req = { body: {} }

    await login(req, res, next)

    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(new ApiError('Required fields'))
  })
  it('should call ApiError for Invalid credentials', async () => {
    const req = {
      body: {
        ...doctor,
      },
    }

    getDoctorByUserName.mockResolvedValueOnce({ ...doctor, fullname })
    verify.mockResolvedValueOnce(false)

    await login(req, res, next)

    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(new ApiError('Invalid credentials'))
  })

  it('should call ApiError for User not found', async () => {
    const req = { body: { username: 'someuser', password: 'somepass' } }

    await login(req, res, next)

    getDoctorByUserName.mockResolvedValueOnce(null)

    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(new ApiError('User not found'))
  })
})
