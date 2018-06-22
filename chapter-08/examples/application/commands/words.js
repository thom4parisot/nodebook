'use strict';

const {random} = require('faker/locale/fr');

module.exports = {
  command: 'words [count]',                      // <1>
  desc: 'Génère des mots',                       // <2>
  handler: (args) => {                           // <3>
    console.log(random.words(args.count || 5));
  },
};
