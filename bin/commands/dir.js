'use strict';

const {join} = require('path');
const {list,dir} = require('./chapters');

module.exports = {
  command: 'dir <chapter>',
  desc: 'Affiche le chemin vers les exemples d\'un chapitre.',
  builder: (yargs) => {
    return yargs
      .positional('chapter', {
        type: 'string',
        choices: list,
      })
      .option('root', {
        describe: 'Affiche le répertoire racine du chapitre',
      })
  },
  handler: (args) => {
    const {chapter,root:isRoot} = args;

    console.log(join(dir(chapter), isRoot ? '' : 'examples'));
  }
};
