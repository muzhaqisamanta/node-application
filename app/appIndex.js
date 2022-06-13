const sum = require('./sum')
const concatedArr = require('./concat')

const final_product = (`This is the sum:${sum.sum} and this is the array:${concatedArr.concatedArray}`)

// console.log(final_product);
module.exports.final_product = final_product