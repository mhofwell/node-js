const net = require('net');
const os = require('os');

const portArr = [];

// gets sockets in the process.argv array
for (let i = 2; i < process.argv.length; i++) {
        if (process.argv[i]) {
                portArr[i - 2] = process.argv[i];
        }
}

// callback eventListener to listen for socket connection requests
function listener(socket) {
        // on connection create a new date Object using new Date()
        const date = new Date();
        let day = date.getDate();
        let hour = date.getHours();

        if (day < 10) {
                day = `0${day}`;
        }

        if (hour < 10) {
                hour = `0+${hour}`;
        }

        // format the date
        const currentTime = `${date.getFullYear()}-${date.getMonth() + 1}-${day} ${hour}:${date.getMinutes()}`;

        // write the data to the socket object, which is a Node duplex Stream that can be read and written too.
        socket.write(`${currentTime}${os.EOL}`);

        // close the connection on the socket.
        socket.end();
}

// creating the Transfer Connection Protocol TCP Server
const server = net.createServer(listener);

// feeds each socket of the array into the createServer function and fires off the eventListener each time.
for (let i = 0; i < portArr.length; i++) {
        server.listen(portArr[i]);
}
