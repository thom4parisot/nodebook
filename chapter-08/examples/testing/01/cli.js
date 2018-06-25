#!/usr/bin/env node

'use strict';

const getTime = require('./lib.js');
const args = require('minimist')(process.argv.slice(2));
const [timezone] = args._;

console.log(getTime(timezone));  // <1>
