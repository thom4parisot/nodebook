#!/usr/bin/env node

'use strict';

const omelette = require('omelette');
const args = require('minimist')(process.argv.slice(2));
const timezones = require('tz-ids');

omelette('nodebook.ch08.omelette')
  .tree({                     // <1>
    '--timezone': timezones,  // <2>
    'now': []
  })
  .init();

console.log(args.timezone);
