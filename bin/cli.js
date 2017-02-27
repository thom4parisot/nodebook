#!/usr/bin/env node

'use strict';

const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const yargs = require('yargs');

updateNotifier({ pkg }).notify();

yargs
  .commandDir('commands')
  .usage('$0')
  .example('$0 chapter 4', 'Positionne le terminal dans le chapitre 4')
  .example('$0 chapter 4 install', 'Installe les dépendances du chapitre 4')
  .example('$0 chapter 4 open', 'Ouvre le chapitre 4 dans un explorateur de fichiers')
  .demandCommand(1)
  .strict()
  .help()
  .argv;
