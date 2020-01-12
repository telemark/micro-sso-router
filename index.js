const getAuthUrl = require('./lib/get-auth-url')
const getMyIp = require('./lib/get-my-ip')

module.exports = async (request, response) => {
  const ip = {
    xForwardedFor: request.headers['x-forwarded-for'] || false,
    remoteAddress: request.connection.remoteAddress || false
  }
  const pathname = request.url
  const query = request.query || {}
  if (query.origin) {
    const { origin, nextPath } = query
    const next = nextPath ? `&nextPath=${nextPath}` : ''
    const authUrl = getAuthUrl(getMyIp(ip))
    const url = `${authUrl}?origin=${origin}${next}`
    response.writeHead(302, { Location: url })
    response.end()
  } else if (pathname === '/ip') {
    response.send(ip)
  } else {
    response.status(400)
    response.send('Bad request')
  }
}
