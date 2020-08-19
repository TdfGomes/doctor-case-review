const { Case } = require('../models')
const ApiError = require('../utils/error')

module.exports = {
  getAllCases: async () => {
    try {
      const cases = await Case.find()
      if (!cases) {
        return null
      }
      return cases
    } catch (error) {
      throw new ApiError(error.message)
    }
  },
}
