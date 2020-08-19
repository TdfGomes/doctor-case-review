const { getDoctorByUserName } = require('../services/doctor')
const { generateToken } = require('../services/auth')
const { verify } = require('../utils/hashPwd')
const { ApiError, STATUS_LIST } = require('../utils/error')

module.exports = {
  login: async (req, res, next) => {
    const { username, password } = req.body

    try {
      if (!username || !password) {
        throw new ApiError(
          `${STATUS_LIST.UNPROCESSABLE_ENTITY}: Required fields`
        )
      }

      const doctor = await getDoctorByUserName(username)
      const matchPassword = doctor && (await verify(password, doctor.password))

      if (!doctor) {
        throw new ApiError(`${STATUS_LIST.NOT_FOUND}: User not found`)
      }

      if (!matchPassword || !doctor) {
        throw new ApiError(
          `${STATUS_LIST.UNPROCESSABLE_ENTITY}: Invalid credentials`
        )
      }

      const token = await generateToken({ ...doctor })

      res.status(200).send({ token, doctor: doctor.fullname })
      next()
    } catch (error) {
      console.error('LOGIN ===>', error.message)
      next(error)
    }
  },
}
