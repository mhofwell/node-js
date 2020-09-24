const fs = require('fs');
const path = require('path');
const fileMethods = require('./mymodule.js');

const ext = `.${process.argv[3]}`;
const dir = process.argv[2];

fileMethods.parent(dir, ext, read());
