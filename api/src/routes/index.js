const express = require('express')
const loginRoute = require('./login')
const conditionsRoute = require('./conditions')
const casesRoute = require('./cases')
const ehrRoute = require('./ehr')

module.exports = function () {
  const router = express.Router()

  router
    .use(loginRoute())
    .use(conditionsRoute())
    .use(casesRoute())
    .use(ehrRoute())

  return router
}
