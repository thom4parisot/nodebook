'use strict';

const parse = require('minimist');
const defaults = { 'country': 'FR' }; // <1>

const args = parse(process.argv.slice(2), { default: defaults });
console.log(args);
