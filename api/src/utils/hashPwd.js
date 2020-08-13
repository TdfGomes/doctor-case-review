const crypto = require('crypto')

module.exports = {
  hash: async (password) => {
    return new Promise((resolve, reject) => {
      const salt = crypto.randomBytes(8).toString('hex')

      crypto.scrypt(password, salt, 64, (error, derivedKey) => {
        if (error) reject(error)
        resolve(`${salt}:${derivedKey.toString('hex')}`)
      })
    })
  },

  verify: async (password, hash) => {
    return new Promise((resolve, reject) => {
      const [salt, key] = hash.split(':')
      crypto.scrypt(password, salt, 64, (error, derivedKey) => {
        if (error) reject(error)
        resolve(key == derivedKey.toString('hex'))
      })
    })
  },
}
