'use strict';

const args = require('yargs')
  .usage('Affiche l\'heure courante d\'ici ou d\'ailleurs.')
  .example('$0 --utc', 'Heure universelle.')            // <1>
  .example('$0 --timezone=Europe/Lisbon', 'Heure de Lisbonne.')
  .command('timezones', 'Affiche les fuseaux horaires IANA.')
  .option('utc', {
    type: 'boolean',                                    // <2>
    description: 'Utilise le fuseau horaire universel.' // <3>
  })
  .option('timezone', {
    description: 'Précise le fuseau horaire au format IANA.'
  })
  .locale('fr')
  .argv;

console.log(args);
