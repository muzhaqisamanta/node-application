const fs = require('fs/promises');

async function jsonArray() {
  try {
    const data = await fs.readFile('data.json', { encoding: 'utf8' });
    return JSON.parse(data)
  } catch (err) {
    return {
        "data": [],
    }
  }
}
module.exports.jsonArray = jsonArray

