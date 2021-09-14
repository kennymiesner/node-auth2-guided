module.exports = function(req, res, next) {
  const { decodedJwt } = req

  if (decodedJwt.role === 'admin') {
    next()
  } else {
    next({
      status: 403, 
    })
  }
}
