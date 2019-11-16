const app = require('express')()
const sampleApi = require('./api/sample')

app.use('/sample', sampleApi)

module.exports = {
  path: '/api',
  handler: app
}
