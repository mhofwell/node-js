let count;
const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const buffString = buffer.toString().split('\n');

console.log(buffString.length - 1);
