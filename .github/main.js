const fs = require('fs');

console.log(fs.existsSync('./credits.json'))

JSON.parse(fs.readFileSync('./credits.json', "utf8"))
