const express = require('express')
const { getCases } = require('../controllers')

module.exports = function () {
  const router = express.Router()

  router.get('/cases', getCases)

  return router
}
