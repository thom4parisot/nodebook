'use strict';

const {join} = require('path');
const {list,dir} = require('./chapters');

module.exports = {
  command: 'dir <chapter>',
  desc: 'Affiche le chemin vers un chapitre.',
  builder: (yargs) => {
    return yargs
      .positional('chapter', {
        type: 'string',
        choices: list,
      })
      .option('examples', {
        describe: 'Affiche le répertoire des exemples',
      })
  },
  handler: (args) => {
    const {chapter,examples} = args;

    console.log(join(dir(chapter), examples ? 'examples' : ''));
  }
};
