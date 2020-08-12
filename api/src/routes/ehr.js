const express = require('express')
const { createEhr } = require('../controllers')
const { authenticateToken } = require('../middleware')

module.exports = function () {
  const router = express.Router()

  router.post('/ehr', authenticateToken, createEhr)

  return router
}
