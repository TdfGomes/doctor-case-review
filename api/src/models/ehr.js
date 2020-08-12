const { Schema, model } = require('mongoose')

const ehrSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    conditionId: { type: String, ref: 'Condition' },
    caseId: { type: Schema.Types.ObjectId, ref: 'Case' },
  },
  { timestamps: true }
)

const Ehr = model('Ehr', ehrSchema)

module.exports = { Ehr }
