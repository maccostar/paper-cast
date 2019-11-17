const { getPrinters } = require('../utils/managePrinters')
const print = require('../utils/print')

module.exports = async (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'put':
      const printers = getPrinters()
      const day = req.query.deliveryDate
      await Promise.all(printers.map(email => print(email, `./static/printers/${email}/${day}.jpg`)))

      if (day === '30') {
        await Promise.all(printers.map(email => print(email, `./static/printers/${email}/31.jpg`)))
      }

      res.sendStatus(204)
      break

    default:
      break
  }
}
