// // directory reading and filtering function

const fs = require('fs');
const path = require('path');

const matches = [];

module.exports = function readDir(dir, ext, callback) {
        const newExt = `.${ext}`;
        fs.readdir(dir, (err, data) => {
                if (err) {
                        return callback(err);
                }
                data.forEach(file => {
                        if (path.extname(file) === newExt) {
                                matches.push(file);
                        }
                });
                callback(null, matches);
        });
};
