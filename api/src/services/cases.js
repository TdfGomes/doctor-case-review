const { Case } = require('../models')

module.exports = {
  getAllCases: async () => {
    try {
      const cases = await Case.find()
      return cases
    } catch (error) {
      throw new Error(error)
    }
  },
}
