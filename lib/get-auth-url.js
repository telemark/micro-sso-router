'use strict'

const wildcard = require('wildcard')
const config = require('../config')

module.exports = ip => {
  const ipMatch = config.SSO_IPS.filter(ssoIp => wildcard(ssoIp, ip))
  return ipMatch.length > 0 ? config.AUTH_URL_INTERNAL : config.AUTH_URL_EXTERNAL
}
