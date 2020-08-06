const { getAllCoditions } = require('../services/condition')

module.exports = {
  getConditions: async (_, res, next) => {
    try {
      const conditions = await getAllCoditions()

      res.status(200).send(conditions)
      next()
    } catch (error) {
      console.log(error.message)
      res.sendStatus(500) && next(error)
    }
  },
}
