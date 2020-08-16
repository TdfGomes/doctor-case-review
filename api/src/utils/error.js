const statusList = Object.freeze({
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
})

class ApiError extends Error {
  constructor(message) {
    super(message)

    const [status, msg] = message.split(':')

    this.name = this.constructor.name
    this.message = status.includes('E1100') ? status : msg ? msg.trim() : status
    this.statusCode = statusList[status] || 500

    Error.captureStackTrace(this, ApiError)
  }
}

module.exports = ApiError
