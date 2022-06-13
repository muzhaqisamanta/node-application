const appArr = require('./appArr')
const converted = require('./converted')
const lodash = require('lodash')

const concatedArr = lodash.concat(converted.jsonArr.data, appArr.appArr )

module.exports.concatedArray = concatedArr;