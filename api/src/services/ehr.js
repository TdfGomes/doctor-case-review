const { Ehr } = require('../models')
const { Types } = require('mongoose')

module.exports = {
  createEhr: async ({ doctorId, caseId, conditionId }) => {
    try {
      const ehr = await new Ehr({
        _id: new Types.ObjectId(),
        doctorId,
        caseId,
        conditionId,
      })
      ehr.save((err, record) => {
        if (err) console.log('ERROR INSERTING EHR====> ', err) // TODO: create handler error for this
        return record
      })
      return ehr
    } catch (error) {
      throw new Error(error)
    }
  },
}
