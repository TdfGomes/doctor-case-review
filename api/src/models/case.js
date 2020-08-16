const { Schema, model } = require('mongoose')

const caseSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    description: { type: String, require: true },
    ehrId: { type: Schema.Types.ObjectId, ref: 'Ehr' },
  },
  { timestamps: true }
)

const Case = model('Case', caseSchema, 'cases')

module.exports = { Case }
