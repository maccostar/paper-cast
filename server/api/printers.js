const { getPrinters, addPrinter,deletePrinter } = require('../utils/managePrinters')

module.exports = (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'get':
      res.json(getPrinters())
      break

    case 'post':
      addPrinter(req.body.email)
      res.sendStatus(204)
      break

    case 'delete':
      deletePrinter(req.query.email)
      res.sendStatus(204)
      break

    default:
      break
  }
}
