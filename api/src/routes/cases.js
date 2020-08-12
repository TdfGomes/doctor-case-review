const express = require('express')
const { getCases } = require('../controllers')
const { authenticateToken } = require('../middleware')

module.exports = function () {
  const router = express.Router()

  router.get('/cases', authenticateToken, getCases)

  return router
}
