'use strict'

module.exports = request => {
  let ip = ''
  if (request.headers['x-forwarded-for']) {
    ip = request.headers['x-forwarded-for'].split('')[0]
  } else if (request.connection && request.connection.remoteAddress) {
    ip = request.connection.remoteAddress
  } else {
    ip = request.ip
  }
  return ip
}
