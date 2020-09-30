const http = require('http');

const urls = [];
const dataArr = [];
let count = 0;

for (let i = 2; i < process.argv.length; i++) {
        urls.push(process.argv[i]);
}

function httpGet(index) {
        let chunk = '';
        http.get(urls[index], response => {
                response.on('error', console.error('bad call!'));
                response.setEncoding('utf8').on('data', data => {
                        chunk += data.concat('');
                });
                response.on('end', () => {
                        count += 1;
                        dataArr[index] = chunk;
                        if (count === 3) {
                                for (let i = 0; i < dataArr.length; i += 1) {
                                        console.log(dataArr[i]);
                                }
                        }
                });
        }).on('error', console.error('another bad call!'));
}

for (let i = 0; i < urls.length; i++) {
        httpGet(i);
}
