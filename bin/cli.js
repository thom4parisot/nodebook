#!/usr/bin/env node

'use strict';

const updateNotifier = require('update-check');
const pkg = require('../package.json');
const yargs = require('yargs');

updateNotifier(pkg)
  .then(update => {
    if (update) {
      const {name} = pkg;
      const {latest} = update;
      console.log(`💡 La version \x1B[32;1m${name}\x1B[0m@${latest} est disponible.`);
      console.log(`👉 Pour en bénéficier : \x1B[33;1mnpm install --global ${name}\x1B[0m`);
    }
  })
  .catch(err => err)
  .then(() => {
    yargs
      .locale('fr')
      .scriptName('nodebook')
      .commandDir('commands')
      .usage('nodebook [command]')
      .completion('autocomplete', 'Affiche le script d\'autocomplétion des commandes')
      .example('nodebook install chapter-04', 'Installe les dépendances du chapitre 4')
      .example('nodebook install all', 'Installe les dépendances de tous les chapitres')
      .example('cd $(nodebook dir chapter-04)', 'Place le terminal dans le répertoire d\'exemples du chapitre 4')
      .example('cd $(nodebook dir chapter-04 --root)', 'Place le terminal dans le répertoire racine du chapitre 4')
      .example('nodebook autocomplete >> ~/.bashrc', 'Installe le script d\'autocomplétion des commandes (shell bash)')
      .demandCommand(1, '')
      .recommendCommands()
      .strict()
      .argv;
  });
