const { Doctor } = require('../models')
const { decode } = require('./auth')

module.exports = {
  getDoctorByUserName: async (username) => {
    try {
      const doctor = await Doctor.findOne({ username }).select('+password')
      return doctor
    } catch (error) {
      throw new Error(error)
    }
  },
  getCurrentDoctor: async (token) => {
    try {
      const currentDoctor = await decode(token, process.env.JWT_SECRET)
      return currentDoctor
    } catch (error) {
      throw new Error(error)
    }
  },
}
