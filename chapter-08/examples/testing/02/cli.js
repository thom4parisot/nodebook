#!/usr/bin/env node

'use strict';

const getTime = require('./lib.js');
const args = require('minimist')(process.argv.slice(2));
const [timezone] = args._;

getTime(timezone)
  .then(time => console.log(time))  // <1>
  .catch(error => {
    console.error(error.message);   // <2>
    process.exit(1);                // <3>
  });
