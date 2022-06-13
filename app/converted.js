const fs = require('fs')

const jsonArr = JSON.parse(fs.readFileSync('data.json'))

module.exports.jsonArr = jsonArr;