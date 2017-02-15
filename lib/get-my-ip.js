'use strict'

module.exports = ips => {
  let ip = ''
  if (ips.xForwardedFor) {
    ip = ips.xForwardedFor
  } else if (ips.remoteAddress) {
    ip = ips.remoteAddress
  }

  return ip
}
