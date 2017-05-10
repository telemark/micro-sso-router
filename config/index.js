'use strict'

const SSO_IPS = process.env.SSO_IPS ? process.env.SSO_IPS.split(',') : ['139.164.160.2', '213.188.19.179']

module.exports = {
  AUTH_URL_INTERNAL: process.env.AUTH_URL_INTERNAL || 'http://tfk-fh-ntlm',
  AUTH_URL_EXTERNAL: process.env.AUTH_URL_EXTERNAL || 'https://auth.service.t-fk.no/login',
  SSO_IPS: SSO_IPS
}
