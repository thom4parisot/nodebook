'use strict';

const yargs = require('yargs');

yargs
  .locale('fr')
  .commandDir('./commands') // <1>
  .argv;
