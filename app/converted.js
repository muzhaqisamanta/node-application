const fs = require('fs')

const jsonArr = JSON.parse(fs.readFile('data.json', (err, data)=>{
    if (err) {
        console.error(err);
        return;
      }
      console.log(data);
}))


module.exports.jsonArr = jsonArr;