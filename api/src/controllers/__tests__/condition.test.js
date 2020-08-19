const { getConditions } = require('../')
const { mockResponse } = require('../../utils/test-utils')
const { getAllCoditions } = require('../../services/condition')
const ApiError = require('../../utils/error')

jest.mock('../../services/condition')

describe('Condition Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return 200 with all conditions in an array', async () => {
    const conditions = [
      { _id: 'AB 100', description: 'Some condition' },
      { _id: 'CB 200', description: 'Some other contition' },
    ]

    getAllCoditions.mockResolvedValue(conditions)

    const req = {}
    const res = mockResponse()
    const next = jest.fn()

    await getConditions(req, res, next)

    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalled()
    expect(res.send).toHaveBeenCalledWith(conditions)
    expect(next).toHaveBeenCalled()
  })
  it('should call ApiError if no condition found', async () => {
    getAllCoditions.mockResolvedValue(null)

    const req = {}
    const res = mockResponse()
    const next = jest.fn()

    await getConditions(req, res, next)

    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(new ApiError('No conditions found'))
  })
})
