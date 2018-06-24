'use strict';

const getStdin = require('get-stdin');
const input = process.argv.slice(2);      // <1>

const uppercase = (text) => text.toLocaleUpperCase();
const log = (text) => process.stdout.write(text);

if (input.length === 0) {                 // <2>
  getStdin().then(uppercase).then(log);
}
else {                                    // <3>
  Promise.resolve(input.join(' ')).then(uppercase).then(log);
}
