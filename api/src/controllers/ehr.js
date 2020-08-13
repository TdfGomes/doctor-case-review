const ehrService = require('../services/ehr')
const ApiError = require('../utils/error')

module.exports = {
  createEhr: async (req, res, next) => {
    try {
      const { caseId, conditionId } = req.body
      const doctorId = req.user._doc._id

      if (!Object.values(req.body).length) {
        throw new ApiError(
          `UNPROCESSABLE_ENTITY: caseId and condidionId are required fields`
        )
      }

      Object.keys(req.body).forEach((field) => {
        if (!req.body[field]) {
          throw new ApiError(`UNPROCESSABLE_ENTITY: ${field} is required`)
        }
      })

      const ehr = await ehrService.createEhr({ doctorId, caseId, conditionId })

      res.status(200).send(ehr)
      next()
    } catch (error) {
      console.log('EHR ===> ', error.message)
      next(error)
    }
  },
}
