const { getPrinters } = require('../utils/managePrinters')
const print = require('../utils/print')

module.exports = async (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'put':
      const printers = getPrinters()
      const day = req.query.deliveryDate
      console.log(printers)

      for (let i = 0; i < printers.length; i += 1) {
        await print(printers[i], `./static/printers/${printers[i]}/${day}.jpg`).catch(e => console.log(e))
      }
      // await Promise.all(printers.map(email => print(email, `./static/printers/${email}/${day}.jpg`)))

      if (day === '30') {
        // await Promise.all(printers.map(email => print(email, `./static/printers/${email}/31.jpg`)))
        for (let i = 0; i < printers.length; i += 1) {
          await print(printers[i], `./static/printers/${printers[i]}/31.jpg`).catch(e => console.log(e))
        }
      }

      res.sendStatus(204)
      break

    default:
      break
  }
}
