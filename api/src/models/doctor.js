const { Schema, model } = require('mongoose')

const doctorSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    fullname: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true, select: false },
  },
  { timestamps: true }
)

const Doctor = model('Doctor', doctorSchema, 'doctors')

module.exports = { Doctor }
