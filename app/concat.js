const lodash = require("lodash");
const arr = require("./appArr");

function concat(list) {
    return lodash.concat(list, arr.appArr);
}

module.exports.concat = concat;