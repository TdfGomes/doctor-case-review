const { createEhr: createEhrService } = require('../services/ehr')
const { ApiError, STATUS_LIST } = require('../utils/error')

module.exports = {
  createEhr: async (req, res, next) => {
    try {
      const { caseId, conditionId } = req.body
      const doctorId = req.user._doc._id

      const requiredFields = ['caseId', 'conditionId']

      if (!Object.values(req.body).length) {
        throw new ApiError(
          `${STATUS_LIST.UNPROCESSABLE_ENTITY}: caseId and condidionId are required fields`
        )
      }

      requiredFields.forEach((field) => {
        if (!Object.keys(req.body).includes(field)) {
          throw new ApiError(
            `${STATUS_LIST.UNPROCESSABLE_ENTITY}: ${field} is required`
          )
        }
        if (!req.body[field]) {
          throw new ApiError(
            `${STATUS_LIST.UNPROCESSABLE_ENTITY}: ${field} is required`
          )
        }
      })

      const ehr = await createEhrService({ doctorId, caseId, conditionId })

      res.status(200).send(ehr)
      next()
    } catch (error) {
      console.error('EHR ===> ', error.message)
      next(error)
    }
  },
}
