'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { send } = require('micro')
const getAuthUrl = require('./lib/get-auth-url')
const getMyIp = require('./lib/get-my-ip')

module.exports = async (request, response) => {
  const { pathname, query } = await parse(request.url, true)
  if (query.origin) {
    const origin = query.origin
    const authUrl = getAuthUrl(request)
    const url = `${authUrl}?origin=${origin}`
    response.writeHead(301, { Location: url })
    response.end()
  } else if (pathname === '/ip') {
    send(response, 200, {ip: getMyIp(request)})
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
