const ApiError = require('../utils/error')

module.exports = {
  errorHandler: (error, req, res, next) => {
    console.log('HANLDER ====>', error)
    if (error instanceof ApiError) {
      const { statusCode, message } = error
      res.status(statusCode).send({
        name: error.name,
        message,
        statusCode,
      })
    } else {
      res.send(500)
    }
  },
}
