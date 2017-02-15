'use strict'

module.exports = request => {
  const ips = {
    'xForwardedFor': request.headers['x-forwarded-for'] || false,
    remoteAddress: request.connection.remoteAddress || false
  }
  let ip = request.ip
  if (ips.xForwardedFor) {
    ip = ips.xForwardedFor
  } else if (ips.remoteAddress) {
    ip = ips.remoteAddress
  }

  return ip
}
