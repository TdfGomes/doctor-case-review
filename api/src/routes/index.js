const express = require('express')
const loginRoute = require('./login')

module.exports = function () {
  const router = express.Router()

  router.use(loginRoute())

  return router
}
