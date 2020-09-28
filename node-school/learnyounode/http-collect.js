const http = require('http');

const url = process.argv[2];

function parseData(httpresponse) {
        let str = '';
        httpresponse.on('error', err => {
                console.error(err);
        });
        httpresponse.on('data', data => {
                str += data.toString();
                return str;
        });
        httpresponse.on('end', () => {
                console.log(str.length);
                console.log(str);
        });
}

http.get(url, parseData);
