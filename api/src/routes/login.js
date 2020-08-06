const express = require('express')
const { login } = require('../controllers')

module.exports = function () {
  const router = express.Router()

  router.post('/login', login)

  return router
}
