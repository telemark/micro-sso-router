const wildcard = require('wildcard')
const SSO_IPS = process.env.SSO_IPS ? process.env.SSO_IPS.split(',') : ['139.164.160.*', '139.164.182.*', '213.188.19.179', '139.164.152.10']

module.exports = ip => {
  const ipMatch = SSO_IPS.filter(ssoIp => wildcard(ssoIp, ip))
  return ipMatch.length > 0 ? process.env.AUTH_URL_INTERNAL : process.env.AUTH_URL_EXTERNAL
}
