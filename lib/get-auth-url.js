'use strict'

const wildcard = require('wildcard')
const config = require('../config')

module.exports = ip => {
  const ipMatch = config.SSO_IPS.filter(e => wildcard(e, ip))
  return ipMatch.length > 0 ? config.AUTH_URL_INTERNAL : config.AUTH_URL_EXTERNAL
}
