'use strict';

const minimist = require('minimist');
const through = require('through2');
const {createReadStream:read} = require('fs');
const {i:input} = minimist(process.argv.slice(2));

const source = input ? read(input) : process.stdin;   // <1>
const uppercase = (text) => text.toLocaleUpperCase();

const transform = through(function(data) {
  this.push(uppercase(String(data)));
});

source.pipe(transform).pipe(process.stdout);          // <2>
