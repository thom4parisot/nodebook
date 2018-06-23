'use strict';

const {resolve} = require('path');
const files = process.argv.slice(2);          // <1>

const resolveFile = (file) => resolve(file);  // <2>

console.log(files.map(resolveFile));          // <3>
