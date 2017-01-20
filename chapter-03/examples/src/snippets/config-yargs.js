'use strict';

const argv = require('yargs')
  .default('y', 2014)
  .required('title')
  .argv;

console.log(argv.y);
console.log(argv.title);
console.log(argv._);
