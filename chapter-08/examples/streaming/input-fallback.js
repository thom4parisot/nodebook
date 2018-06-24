'use strict';

const minimist = require('minimist');
const through = require('through2');
const {createReadStream} = require('fs');
const {input=''} = minimist(process.argv.slice(2));

const uppercase = (text) => text.toLocaleUpperCase();
const transform = through(function(data) {  // <1>
  this.push(uppercase(String(data)));       // <2>
});

if (!input.length) {
  process.stdin.pipe(transform)             // <3>
    .pipe(process.stdout);
}
else {
  createReadStream(input).pipe(transform)
    .pipe(process.stdout);
}
