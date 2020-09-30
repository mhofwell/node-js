const http = require('http');

const urls = [];
const dataArr = [];
let chunk = '';
const strData = '';
let count = 0;

for (let i = 2; i < process.argv.length; i++) {
        urls.push(process.argv[i]);
}

function httpGet(index) {
        http.get(urls[index], response => {
                response.on('error', console.error);
                response.setEncoding('utf8').on('data', data => {
                        chunk += data.concat('');
                });
                response.on('end', () => {
                        count += 1;
                        console.log(count);
                        console.log(index);
                        dataArr[index] = chunk;
                        console.log(dataArr[index]);
                });
        }).on('error', console.error);

        if (count === 3) {
                for (let i = 0; i < dataArr.length; i += 1) {
                        console.log(dataArr[i]);
                }
        }
}

for (let i = 0; i < urls.length; i++) {
        httpGet(i);
}
