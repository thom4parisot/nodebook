'use strict';

const yargs = require('yargs');

yargs
  .commandDir('commands')
  .demandCommand(1)
  .strict()
  .help()
  .argv;
