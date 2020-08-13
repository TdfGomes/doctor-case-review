const { Case } = require('../models')
const ApiError = require('../utils/error')

module.exports = {
  getAllCases: async () => {
    try {
      const cases = await Case.find()
      if (!cases) {
        throw new Error('NOT_FOUND: No cases found')
      }
      return cases
    } catch (error) {
      throw new ApiError(error.message)
    }
  },
}
