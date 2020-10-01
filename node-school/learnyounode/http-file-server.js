const http = require('http');
const fs = require('fs');

const activePort = process.argv[2]; 
const file = process.argv[3];

// gets sockets in the process.argv array


function listener(request, response) {
request.on('error', console.error('Something went wrong!'), 
request.on('data', data => {} ); 
}

// creating the http Server
const server = http.createServer(listener);

// feeds each socket of the array into the createServer function and fires off the eventListener each time.
server.listen(activePort);
