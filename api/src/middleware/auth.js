const jwt = require('jsonwebtoken')
const ApiError = require('../utils/error')
const secret = process.env.JWT_SECRET

module.exports = {
  authenticateToken: (req, _, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      throw new ApiError('UNAUTHORIZED')
    }

    jwt.verify(token, secret, (error, user) => {
      if (error) {
        throw new ApiError('FORBIDDEN')
      }
      req.user = user
      next()
    })
  },
}
