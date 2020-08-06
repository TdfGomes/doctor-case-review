const jwt = require('jsonwebtoken')

module.exports = {
  generateToken: async (data) =>
    await jwt.sign(data, process.env.JWT_SECRET, { algorithm: 'HS512' }),
  decode: async (token) => await jwt.verify(token, process.env.JWT_SECRET),
}
