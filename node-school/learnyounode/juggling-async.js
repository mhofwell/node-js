const http = require('http');

// Create the http get requets for the data, assign them to a varible.

function multiURL(url, url2, url3, url4) {
        const urlArr = [url, url2, url3, url4];

        let strData = '';

        urlArr.forEach(addy => {
                http.get(addy, response => {
                        response.on('error', console.error);

                        response.on('data', data => {
                                strData = data.toString();
                                return strData;
                        });

                        response.on('end', () => {
                                console.log(strData);
                        });
                });
        });
}

multiURL(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);

// resolve the http requests with Promise.all() to ensure they all resolve before logging them.
