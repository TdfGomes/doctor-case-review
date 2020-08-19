const { getAllCases } = require('../services/cases')
const { ApiError, STATUS_LIST } = require('../utils/error')

module.exports = {
  getCases: async (_, res, next) => {
    try {
      const cases = await getAllCases()
      if (!cases) {
        throw new ApiError(`${STATUS_LIST.NOT_FOUND}: No cases found`)
      }
      res.status(200).send(cases)
      next()
    } catch (error) {
      console.error('CASES ==> ', error.message)
      next(error)
    }
  },
}
