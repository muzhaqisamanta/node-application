function sum(arr) {
    return arr.reduce((p, c) => {
        return p + c;
    }, 0)
}

module.exports.sum = sum;