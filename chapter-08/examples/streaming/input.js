'use strict';

const minimist = require('minimist');
const getStream = require('get-stream');    // <1>
const {createReadStream} = require('fs');
const {input=''} = minimist(process.argv.slice(2));

const uppercase = (text) => text.toLocaleUpperCase();
const log = (text) => process.stdout.write(text);

if (input) {
  getStream(createReadStream(input))        // <2>
    .then(uppercase).then(log);
}
