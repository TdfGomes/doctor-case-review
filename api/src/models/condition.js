const { Schema, model } = require('mongoose')

const conditionSchema = Schema(
  {
    _id: String,
    description: { type: String, require: true },
  },
  { timestamps: true }
)

const Condition = model('Condition', conditionSchema, 'condition')

module.exports = { Condition }
