'use strict';

const yargs = require('yargs');
const {readFileSync} = require('fs');

const parseJSON = (path) => JSON.parse(readFileSync(path));

const args = yargs
  .locale('fr')
  .option('json-file', {
    type: 'string',
    coerce: parseJSON,        // <1>
  })
  .argv;

console.log(args.jsonFile);   // <2>
