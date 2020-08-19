const { Condition } = require('../models')
const { ApiError } = require('../utils/error')

module.exports = {
  getAllCoditions: async () => {
    try {
      const conditions = await Condition.find()
      if (!conditions) {
        return null
      }
      return conditions
    } catch (error) {
      throw new ApiError(error.message)
    }
  },
}
