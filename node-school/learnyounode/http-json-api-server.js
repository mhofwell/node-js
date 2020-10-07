const http = require('http');

const port = process.argv[2];

function returnJSON(req, res) {
        req.on('error', err => console.error(err));

        // listen for a GET request method and confirm you're working with GET

        if (req.method === 'GET') {
                // create a new URL string
                const incURL = new URL(`http:/${req.url}`);

                // get the time string
                const timeQuery = incURL.search.slice(5);

                // handle the request type
                if (incURL.pathname === '/parsetime') {
                        // logic for JSON response
                        const time = new Date(timeQuery);
                        const hour = time.getHours();
                        const minute = time.getMinutes();
                        const second = time.getSeconds();
                        const jsonRes = JSON.stringify({ hour, minute, second });

                        // return the correct headers in the response.
                        res.writeHead(200, { 'Content-type': 'application/json' });

                        // send our JSON response on end.
                        res.end(jsonRes);
                }
                // handle the request type
                if (incURL.pathname === '/unixtime') {
                        // logic to output time UNIX Epoch Time
                        const time = new Date(timeQuery);

                        // on end, return unixtime
                        res.end(`{ "unixtime" : ${time.getTime()} }`);
                }
        }
}

// create the server
const server = http.createServer(returnJSON);

// listen to a port
server.listen(port);
console.log(`Listening on port ${port}`);
