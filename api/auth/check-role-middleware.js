module.exports = function (role) {
  return function (req, res, next) {
    const { decodedJwt } = req
    if (decodedJwt.role === 'admin') {
      next()
    } else {
      next({
        status: 403, message: 'you cannot touch this!'
      })
    }
  }
}
