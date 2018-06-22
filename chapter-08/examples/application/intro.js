'use strict';

const yargs = require('yargs');
const args = yargs
  .option('utc', {    // <1>
    alias: 'u',
    type: 'boolean',
  })
  .locale('fr')       // <2>
  .argv;              // <3>

console.log(args);
