'use strict'

const config = require('../config')
const getMyIp = require('./get-my-ip')

module.exports = request => {
  const ip = getMyIp(request)
  if (config.SSO_IPS.includes(ip)) {
    return config.AUTH_URL_INTERNAL
  } else {
    config.AUTH_URL_EXTERNAL
  }
}
