const {jsonArray, sum, concat} = require('./app')


jsonArray()
.then(res => res.data)
    .then(res => {
        console.log(`First array's sum is: ${sum(res)}`);
        console.log(`The concated array is: ${concat(res)}`);
        console.log(`The sum of the concated array is: ${sum(concat(res))}`);
    });