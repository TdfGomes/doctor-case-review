const { Ehr } = require('../models')
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

      return ehr
    } catch (error) {
      throw new ApiError(error.message)
    }
  },
}
