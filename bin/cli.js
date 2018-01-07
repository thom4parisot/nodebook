#!/usr/bin/env node

'use strict';

const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const yargs = require('yargs');

updateNotifier({ pkg }).notify();

yargs
  .commandDir('commands')
  .usage('nodebook')
  .example('nodebook install chapter-04', 'Installe les dépendances du chapitre 4')
  .example('nodebook install all', 'Installe les dépendances de tous les chapitres')
  .example('nodebook open chapter-04', 'Ouvre le chapitre 4 dans un explorateur de fichiers')
  .demandCommand(1)
  .strict()
  .help()
  .argv;
