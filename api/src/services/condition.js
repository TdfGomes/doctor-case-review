const { Condition } = require('../models')
const ApiError = require('../utils/error')

module.exports = {
  getAllCoditions: async () => {
    try {
      const conditions = await Condition.find()
      if (!conditions) {
        throw new Error('NOT_FOUND: No conditions found')
      }
      return conditions
    } catch (error) {
      throw new ApiError(error.message)
    }
  },
}
