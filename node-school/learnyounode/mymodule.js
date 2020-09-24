// // directory reading and filtering function

const fs = require('fs');
const path = require('path');

function read(err, data) {
        if (err) {
                throw err;
        } else {
                data.forEach(file => {
                        if (path.extname(file) === ext) {
                                return file;
                        }
                });
        }
}

function parent(dir, ext, callback) {
        fs.readdir(dir, function callback(err, data) {
                if (err) {
                        throw err;
                } else {
                        data.forEach(file => {
                                if (path.extname(file) === ext) {
                                        return file;
                                }
                        });
                }
        }
}

export default parent;
