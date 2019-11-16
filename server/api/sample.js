const print = require('../utils/print')

module.exports = async (req, res) => {
  const { printerEmail, filePath } = req.body
  res.sendStatus(await print(printerEmail, filePath))
}
