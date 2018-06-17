'use strict';

const argv = process.argv.slice(2);
const parse = require('minimist');
const string = ['country'];
const boolean = ['fast'];

console.log(parse(argv, { string, boolean }));
