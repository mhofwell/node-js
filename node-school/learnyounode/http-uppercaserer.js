const http = require('http');

const port = process.argv[2];

function handleRequest(req, res) {
        req.on('error', err => console.error(err));
        let body = '';
        if (req.method === 'POST') {
                req.setEncoding('utf8').on('data', chunk => {
                        body += chunk;
                });
        } else {
                console.log('Cannot accept GET request!');
        }
        req.on('end', () => {
                res.write(body.toUpperCase());
                res.end();
        });
}

const server = http.createServer(handleRequest);

server.listen(port);
console.log(`Listening on port ${port}`);

// solve this with src.pipe(truncate).pipe(dst);
