#!/usr/bin/env node

'use strict';

const updateNotifier = require('update-check');
const pkg = require('../package.json');
const yargs = require('yargs');

updateNotifier(pkg).then(update => {
  if (update && update.latest !== pkg.version) {
    console.log('💡 Une nouvelle version est disponible. Tape `npm install -g nodebook` pour l\'installer.');
  }
});

yargs
  .commandDir('commands')
  .usage('nodebook')
  .example('nodebook install chapter-04', 'Installe les dépendances du chapitre 4')
  .example('nodebook install all', 'Installe les dépendances de tous les chapitres')
  .example('cd $(nodebook dir chapter-04)', 'Place le terminal dans le répertoire d\'exemples du chapitre 4')
  .example('cd $(nodebook dir chapter-04 --root)', 'Place le terminal dans le répertoire racine du chapitre 4')
  .demandCommand(1)
  .strict()
  .locale('fr')
  .help()
  .argv;
