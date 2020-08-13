const jwt = require('jsonwebtoken')
const ApiError = require('../utils/error')
const secret = process.env.JWT_SECRET

module.exports = {
  authenticateToken: (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
      throw new ApiError('UNAUTHORIZED')
    }

    jwt.verify(token, secret, (error, user) => {
      console.log(error)
      if (error) {
        throw new ApiError('FORBIDDEN')
      }
      req.user = user
      next()
    })
  },
}
