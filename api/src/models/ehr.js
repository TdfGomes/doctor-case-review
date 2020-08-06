const { Schema, model } = require('mongoose')

const ehrSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    doctorId: { type: Schema.Types.ObjectId, require: true, ref: 'Doctor' },
    conditionId: { type: String, require: true, ref: 'Condition' },
  },
  { timestamps: true }
)

const Ehr = model('Ehr', ehrSchema)

module.exports = { Ehr }
