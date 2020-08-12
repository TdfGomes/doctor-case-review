const ehrService = require('../services/ehr')

module.exports = {
  createEhr: async (req, res, next) => {
    try {
      const { caseId, conditionId } = req.body
      const doctorId = req.user._doc._id

      const ehr = await ehrService.createEhr({ doctorId, caseId, conditionId })

      res.status(200).send(ehr)
      next()
    } catch (error) {
      console.log(error.message)
      res.sendStatus(500) && next(error)
    }
  },
}
