'use strict';

const parse = require('minimist');
const options = {defaults: {country: 'FR'}};      // <1>

const args = parse(process.argv.slice(2), options);
console.log(args);
