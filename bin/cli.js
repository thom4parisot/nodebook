#!/usr/bin/env node

'use strict';

const updateNotifier = require('update-check');
const pkg = require('../package.json');
const yargs = require('yargs');

updateNotifier(pkg)
  .then(update => {
    if (update) {
      console.log('🙂 Une nouvelle version de \x1B[32;1mnodebook\x1B[0m est disponible.');
      console.log('👉 Tape \x1B[33;1mnpm install -g nodebook\x1B[0m pour l\'installer.');
    }
  }, err => err)
  .then(() => {
    yargs
      .locale('fr')
      .scriptName('nodebook')
      .commandDir('commands')
      .usage('nodebook [command]')
      .example('nodebook install chapter-04', 'Installe les dépendances du chapitre 4')
      .example('nodebook install all', 'Installe les dépendances de tous les chapitres')
      .example('cd $(nodebook dir chapter-04)', 'Place le terminal dans le répertoire d\'exemples du chapitre 4')
      .example('cd $(nodebook dir chapter-04 --root)', 'Place le terminal dans le répertoire racine du chapitre 4')
      .demandCommand(1, '')
      .recommendCommands()
      .strict()
      .argv;
  });
