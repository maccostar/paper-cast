require('dotenv').config()
const bodyParser = require('body-parser')
const app = require('express')()
const deliveryApi = require('./api/deliveryDate')
const printerApi = require('./api/printers')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/deliveryDate', deliveryApi)
app.use('/printers', printerApi)

module.exports = {
  path: '/api',
  handler: app
}
