const express = require('express')
const loginRoute = require('./login')
const conditionsRoute = require('./conditions')
const casesRoute = require('./cases')

module.exports = function () {
  const router = express.Router()

  router.use(loginRoute()).use(conditionsRoute()).use(casesRoute())

  return router
}
