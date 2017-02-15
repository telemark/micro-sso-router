'use strict'

const config = require('../config')

module.exports = request => {
  let ip = ''
  if (request.headers['x-forwarded-for']) {
    ip = request.headers['x-forwarded-for'].split('')[0]
  } else if (request.connection && request.connection.remoteAddress) {
    ip = request.connection.remoteAddress
  } else {
    ip = request.ip
  }
  return config.SSO_IPS.includes(ip) ? config.AUTH_URL_INTERNAL : config.AUTH_URL_EXTERNAL
}
