const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

module.exports = function (user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }
}
