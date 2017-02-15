'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { send } = require('micro')
const getAuthUrl = require('./lib/get-auth-url')

module.exports = async (request, response) => {
  const { query } = await parse(request.url, true)
  if (query.origin) {
    console.log('Heres origin')
    const origin = query.origin
    const authUrl = getAuthUrl(request)
    const url = `${authUrl}?origin=${origin}`
    response.writeHead(301, { Location: url })
    response.end()
  } else {
    console.log('Origin missing')
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
