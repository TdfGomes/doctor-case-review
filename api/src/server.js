const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { errorHandler } = require('./middleware')
const http = require('http')
const routes = require('./routes')
const dbConnect = require('./dbConnect')

const app = express()

module.exports = function server() {
  console.log('creating server... 🔨')

  function createServer() {
    app
      .use(cors())
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use('/api', routes())
      .use(errorHandler)

    const httpServer = http.createServer(app)

    httpServer.on('close', () => {
      console.log('Server closing')
    })

    httpServer.on('error', (error) => {
      console.error('Error', error)
    })

    console.log('server created!!! 👍')

    return httpServer
  }

  async function startServer() {
    const PORT = process.env.PORT || 8080
    await dbConnect()
    createServer().listen(PORT, () => {
      console.log(`Server Running 🏃‍♂️on port ${PORT}`)
    })
  }

  return startServer
}
