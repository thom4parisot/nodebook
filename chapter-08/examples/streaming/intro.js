'use strict';

const getStdin = require('get-stdin');                // <1>

const uppercase = (text) => text.toLocaleUpperCase();
const log = (text) => process.stdout.write(text);

getStdin().then(uppercase).then(log);                 // <2>
