const { getCases } = require('../')
const { mockResponse } = require('../../utils/test-utils')
const { getAllCases } = require('../../services/cases')
const ApiError = require('../../utils/error')

jest.mock('../../services/cases')

describe('Case Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return 200 with all cases in an array', async () => {
    const cases = [
      { _id: 1, description: 'one case' },
      { _id: 2, description: 'two cases' },
    ]

    getAllCases.mockResolvedValue(cases)

    const req = {}
    const res = mockResponse()
    const next = jest.fn()

    await getCases(req, res, next)

    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalled()
    expect(res.send).toHaveBeenCalledWith(cases)
    expect(next).toHaveBeenCalled()
  })
  it('should call ApiError if no case found', async () => {
    getAllCases.mockResolvedValue(null)

    const req = {}
    const res = mockResponse()
    const next = jest.fn()

    await getCases(req, res, next)

    expect(res.status).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(new ApiError('No cases found'))
  })
})
