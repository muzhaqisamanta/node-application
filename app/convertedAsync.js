const fs = require('fs/promises');

async function jsonArray() {
  try {
    const data = await fs.readFile('data.json', { encoding: 'utf8' });
    return JSON.parse(data)
  } catch (err) {
    console.error('The readFile was unable to read the json file.')
    console.error('The sum output will be the sum of the second array.\n')
    return{
      'data':[],
    }
  }
}
module.exports.jsonArray = jsonArray

