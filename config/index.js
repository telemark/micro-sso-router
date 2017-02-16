'use strict'

const SSO_IPS = process.env.SSO_IPS ? process.env.SSO_IPS.split(',') : ['139.164.160.2', '213.188.19.179']

module.exports = {
  AUTH_URL_INTERNAL: process.env.AUTH_URL_INTERNAL || 'http://authportalen',
  AUTH_URL_EXTERNAL: process.env.AUTH_URL_EXTERNAL || 'https://ldap.auth.mikrotjeneste.win/login',
  SSO_IPS: SSO_IPS
}
