const { Doctor } = require('../models')
const ApiError = require('../utils/error')

module.exports = {
  getDoctorByUserName: async (username) => {
    try {
      const doctor = await Doctor.findOne({ username }).select('+password')
      if (!doctor) {
        throw new Error('NOT_FOUND: User not found')
      }
      return doctor
    } catch (error) {
      throw new ApiError(error.message)
    }
  },
}
