const http = require('http');

// Create the http get requets for the data, assign them to a varible.

const urlArr = [process.argv[2], process.argv[3], process.argv[4], process.argv[5]];

async function parseURL(array) {
        await array.forEach(url => {
                http.get(url, response => {
                        let strData = '';

                        response.on('error', err => {
                                console.error(err);
                        });

                        response.on('data', data => {
                                strData += data.toString();
                        });

                        response.on('end', () => {
                                console.log(strData);
                        });
                }).on('error', console.error);
        });
}

parseURL(urlArr);

// const allRes = Promise.all(promArr);

// allRes.then(responses => console.log(`${responses}`));

// for (let i = 0; i < process.argv.length; i + 1) {
//         console.log(Object.values(allRes[i]));
// }

// allRes.then(resolved => console.log(resolved));

// resolve the http requests with Promise.all() to ensure they all resolve before logging them.
