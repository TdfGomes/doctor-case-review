const ApiError = require('../utils/error')

module.exports = {
  errorHandler: (error, req, res, next) => {
    if (error instanceof ApiError) {
      const { statusCode, message } = error
      res.status(statusCode).send({
        error: error.name,
        message,
        statusCode,
      })
    } else {
      res.send(500)
    }
  },
}
