const readDir = require('./mymodule.js');

const ext = process.argv[3];
const dir = process.argv[2];

function printData(err, file) {
        if (err) {
                throw err;
        } else {
                file.forEach(afile => console.log(afile));
        }
}

readDir(dir, ext, printData);
