const twice = require('../utils/twice')

module.exports = (req, res) => {
  res.json({ test: twice(11) })
}
