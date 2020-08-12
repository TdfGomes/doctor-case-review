const express = require('express')
const { getConditions } = require('../controllers')
const { authenticateToken } = require('../middleware')

module.exports = function () {
  const router = express.Router()

  router.get('/conditions', authenticateToken, getConditions)

  return router
}
