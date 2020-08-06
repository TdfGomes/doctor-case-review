const { Condition } = require('../models')

module.exports = {
  getAllCoditions: async () => {
    try {
      const conditions = await Condition.find()
      return conditions
    } catch (error) {
      throw new Error(error)
    }
  },
}
