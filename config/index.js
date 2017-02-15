'use strict'

const SSO_IPS = process.env.SSO_IPS ? process.env.SSO_IPS.split(',') : ['139.164.160.2', '0:0:0:0:0:FFFF:8BA4:A002', '2002:8ba4:a002:0:0:0:0:0', '213.188.19.179', '0:0:0:0:0:FFFF:D5BC:13B3', '2002:d5bc:13b3:0:0:0:0:0']

module.exports = {
  AUTH_URL_INTERNAL: process.env.AUTH_URL_INTERNAL || 'https://login.t-fk.no',
  AUTH_URL_EXTERNAL: process.env.AUTH_URL_EXTERNAL || 'https://ldap.auth.mikrotjeneste.win/login',
  SSO_IPS: SSO_IPS
}