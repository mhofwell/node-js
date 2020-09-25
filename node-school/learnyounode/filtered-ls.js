// Create a file named filtered-ls.js.

//   Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.

//   For example, if you get 'txt' as the second argument then you will need to
//   filter the list to only files that end with .txt. Note that the second
//   argument will not come prefixed with a '.'.

//   Keep in mind that the first arguments of your program are not the first
//   values of the process.argv array, as the first two values are reserved for
//   system info by Node.

//   The list of files should be printed to the console, one file per line. You
//   must use asynchronous I/O.

const fs = require('fs');
const path = require('path');

function printListFile(err, list) {
        if (err) {
                throw err;
        } else {
                list.forEach(file => {
                        if (path.extname(file) === '.md') {
                                console.log(file);
                        }
                });
        }
}

fs.readdir(process.argv[2], printListFile);

console.log(process.argv);

// callback function
// you recieve the list of data, and then check if there's an error, if not print to the console.

// nodeschool solution
// 'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })
