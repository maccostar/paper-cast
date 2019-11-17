const fs = require('fs')

module.exports = {
  getPrinters: () => fs.readdirSync('./static/printers'),
  addPrinter: email => fs.mkdirSync(`./static/printers/${email}`, '777'),
  deletePrinter: email => fs.rmdirSync(`./static/printers/${email}`)
}
