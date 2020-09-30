const http = require('http');

const abc = 'asdfsadfasd';
const def = 'sdafadfsadfa';

const aaa = abc.join(def);
console.log(aaa);

// http.get(process.argv[2], response => {
//         response.on('error', console.error);
//         response.on('data', data => {
//                 arr.push(data.toString());
//                 arr.join(' ');
//                 console.log(arr);
//         });
//         response.on('end', () => {});
// }).on('error', console.error);
