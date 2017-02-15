'use strict'

const config = require('../config')

module.exports = ip => {
  if (config.SSO_IPS.includes(ip)) {
    return config.AUTH_URL_INTERNAL
  } else {
    config.AUTH_URL_EXTERNAL
  }
}
