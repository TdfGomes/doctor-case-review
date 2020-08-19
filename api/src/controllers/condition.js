const { getAllCoditions } = require('../services/condition')
const ApiError = require('../utils/error')

module.exports = {
  getConditions: async (_, res, next) => {
    try {
      const conditions = await getAllCoditions()
      if (!conditions) {
        throw new ApiError('NOT_FOUND: No conditions found')
      }
      res.status(200).send(conditions)
      next()
    } catch (error) {
      console.error('CONDITIONS ==>', error.message)
      next(error)
    }
  },
}
