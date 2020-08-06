const { Schema, model } = require('mongoose')

const doctorSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true, select: false },
  },
  { timestamps: true }
)

const Doctor = model('Doctor', doctorSchema, 'doctor')

module.exports = { Doctor }
