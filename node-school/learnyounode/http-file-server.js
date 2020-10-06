const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const path = process.argv[3];

function handleRequest(req, res) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        fs.createReadStream(path).pipe(res);
}

const server = http.createServer(handleRequest);

server.listen(port);
