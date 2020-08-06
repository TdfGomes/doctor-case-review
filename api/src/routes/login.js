const express = require('express')
const { login } = require('../controllers')

const router = express.Router()

router.post('/login', login)

module.exports = router
