const http = require('http');

// Create the http get requets for the data, assign them to a varible.

const urlArr = [process.argv[2], process.argv[3], process.argv[4], process.argv[5]];
const promArr = [];

// for (let i = 2; i < process.argv.length; i + 1) {
//         urlArr.push(process.argv[i]);
// }

// console.log(urlArr);

urlArr.forEach(addy => {
        promArr.push(
                new Promise(resolve => {
                        resolve(
                                http
                                        .get(addy, response => {
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
                                        })
                                        .on('error', console.error)
                        );
                })
        );
});

// const allRes = Promise.all(promArr);

// allRes.then(responses => console.log(`${responses}`));

// for (let i = 0; i < process.argv.length; i + 1) {
//         console.log(Object.values(allRes[i]));
// }

// allRes.then(resolved => console.log(resolved));

// resolve the http requests with Promise.all() to ensure they all resolve before logging them.
