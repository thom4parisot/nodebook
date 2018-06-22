'use strict';

const yargs = require('yargs');

const args = yargs
  .locale('fr')
  .option('date', {
    type: 'string',
    default: new Date(),              // <1>
    defaultDescription: 'now',        // <2>
    coerce: input => new Date(input)  // <3>
  })
  .argv;

console.log(args.date.toISOString())
