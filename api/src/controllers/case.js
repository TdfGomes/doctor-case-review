const { getAllCases } = require('../services/cases')

module.exports = {
  getCases: async (_, res, next) => {
    try {
      const cases = await getAllCases()

      res.status(200).send(cases)
      next()
    } catch (error) {
      console.log('CASES ==> ', error.message)
      next(error)
    }
  },
}
