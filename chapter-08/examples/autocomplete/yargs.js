#!/usr/bin/env node

'use strict';

require('yargs')
  .option('timezone', {
    type: 'string',
  })
  .completion()           // <1>
  .argv;
