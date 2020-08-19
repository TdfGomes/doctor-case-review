const { createEhr } = require('../')
const { createEhr: createEhrService } = require('../../services/ehr')
const ApiError = require('../../utils/error')
const { mockResponse } = require('../../utils/test-utils')

jest.mock('../../services/ehr')

describe('Ehr Controller', () => {
  const user = {
    _doc: {
      _id: 'someuserid',
    },
  }

  const ehr = {
    _id: '5f3cf83d11c4f203b8035c7c',
    doctorId: '5f3be5b75c8722a0db30f975',
    caseId: '5f3be5b7d741597c7e255de7',
    conditionId: 'A09',
    createdAt: '2020-08-19T10:00:29.202Z',
    updatedAt: '2020-08-19T10:00:29.202Z',
  }
  const res = mockResponse()
  const next = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create a ehr successfuly', async () => {
    const caseId = 'caseId'
    const conditionId = 'conditionId'
    const req = {
      body: {
        caseId,
        conditionId,
      },
      user,
    }

    createEhrService.mockResolvedValueOnce(ehr)
    await createEhr(req, res, next)

    expect(res.status).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalled()
    expect(res.send).toHaveBeenCalledWith(ehr)
    expect(next).toHaveBeenCalled()
  })

  it('should call ApiError for required fields ', async () => {
    const req = {
      body: {},
      user,
    }

    await createEhr(req, res, next)

    expect(next).toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(
      new ApiError('caseId and condidionId are required fields')
    )
  })

  it.each`
    caseId       | conditionId  | expected
    ${'someId'}  | ${undefined} | ${'conditionId is required'}
    ${undefined} | ${'someId'}  | ${'caseId is required'}
  `(
    'should call ApiError for $expected',
    async ({ caseId, conditionId, expected }) => {
      const req = {
        body: {
          caseId,
          conditionId,
        },
        user,
      }

      await createEhr(req, res, next)

      expect(next).toHaveBeenCalled()
      expect(next).toHaveBeenCalledWith(new ApiError(expected))
    }
  )
})
