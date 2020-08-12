const { Doctor } = require('../models')

module.exports = {
  getDoctorByUserName: async (username) => {
    try {
      const doctor = await Doctor.findOne({ username }).select('+password')
      if (!doctor) {
        throw new Error('There are no users')
      }
      return doctor
    } catch (error) {
      throw new Error(error)
    }
  },
}
