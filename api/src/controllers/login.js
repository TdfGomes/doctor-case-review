const { getDoctorByUserName } = require('../services/doctor')
const { generateToken } = require('../services/auth')
const { verify } = require('../utils/hashPwd')

module.exports = {
  login: async (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(422).send('Required Fields')
    }

    try {
      const doctor = await getDoctorByUserName(username)
      const matchPassword = doctor && (await verify(password, doctor.password))

      if (!matchPassword || !doctor) {
        return res.status(422).send('Invalid Credentials')
      }

      const token = await generateToken({ ...doctor })

      res.status(200).send({ token })
      next()
    } catch (error) {
      console.log(error.message)
      res.sendStatus(500) && next(error)
    }
  },
}
