// The solution to this problem is almost the same as the previous problem
//   except you must now do it the Node.js way: asynchronous.

//   Instead of fs.readFileSync() you will want to use fs.readFile() and
//   instead of using the return value of this method you need to collect the
//   value from a callback function that you pass in as the second argument. To
//   learn more about callbacks, check out:
//   (https://github.com/maxogden/art-of-node#callbacks).

//   Remember that idiomatic Node.js callbacks normally have the signature:

//      function callback (err, data) { /* ... */ }

const fs = require('fs');

function emptyLineCount(err, data) {
        if (err) {
                console.log(err);
        } else {
                console.log(data.toString().split('\n').length - 1);
        }
}

const abc = fs.readFile(process.argv[2], emptyLineCount);
