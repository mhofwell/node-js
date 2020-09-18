let count;
const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const buffString = buffer.toString().split('/\n/g');
console.log(buffString);

// console.log(buffString.length);

// buffer.forEach(entry => {
//         if (entry === /\n/g) {
//                 count += 1;
//         }
// });

// console.log(count);
