require('dotenv').config()
const bodyParser = require('body-parser')
const app = require('express')()
const printerApi = require('./api/printers')
const sampleApi = require('./api/sample')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/printers', printerApi)
app.use('/sample', sampleApi)

module.exports = {
  path: '/api',
  handler: app
}
