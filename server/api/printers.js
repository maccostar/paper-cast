const fs = require('fs')
const jsonPath = './server/storage/printers.json'
const printers = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
const save = () => fs.writeFileSync(jsonPath, JSON.stringify(printers), 'utf8')

module.exports = (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'get':
      res.json(printers)
      break

    case 'post':
      printers.push(req.body.email)
      save()
      res.sendStatus(204)
      break

    case 'delete':
      printers.splice(printers.indexOf(req.query.email), 1)
      save()
      res.sendStatus(204)
      break

    default:
      break
  }
}
