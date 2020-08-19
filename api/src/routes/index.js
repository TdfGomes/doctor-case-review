const express = require('express')
const loginRoute = require('./login')
const conditionsRoute = require('./conditions')
const casesRoute = require('./cases')
const ehrRoute = require('./ehr')

module.exports = function () {
  const router = express.Router()

  router
    .use(conditionsRoute())
    .use(casesRoute())
    .use(ehrRoute())
    .use(loginRoute())

  return router
}
