const { Schema, model } = require('mongoose')

const ehrSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', require: true },
    conditionId: { type: String, ref: 'Condition', require: true },
    caseId: {
      type: Schema.Types.ObjectId,
      ref: 'Case',
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
)

const Ehr = model('Ehr', ehrSchema)

module.exports = { Ehr }
