const { Ehr, Case } = require('../models')
const { Types } = require('mongoose')
const ApiError = require('../utils/error')

module.exports = {
  createEhr: async ({ doctorId, caseId, conditionId }) => {
    try {
      const ehr = await new Ehr({
        _id: new Types.ObjectId(),
        doctorId,
        caseId,
        conditionId,
      })

      await ehr.save()

      await Case.findByIdAndUpdate(caseId, { ehrId: ehr._id })

      return ehr
    } catch (error) {
      console.error('SERVICE ERROR ===>', error.message)
      throw new ApiError(error.message)
    }
  },
}
