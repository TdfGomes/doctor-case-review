const express = require('express')
const { getConditions } = require('../controllers')

module.exports = function () {
  const router = express.Router()

  router.get('/conditions', getConditions)

  return router
}
