'use strict';

const {spawn} = require('child_process');
const {join} = require('path');
const opn = require('opn');
const {list,dir} = require('./chapters');

const DEFAULTS_OPEN = {
  stdio: 'inherit',
  env: process.env,
  shell: true
};

module.exports = {
  command: 'dir <chapter>',
  desc: 'Affiche le chemin vers les exemples d\'un chapitre.',
  builder: (yargs) => {
    return yargs
      .positional('chapter', {
        type: 'string',
        choices: list,
      });
  },
  handler: (args) => {
    const {chapter} = args;

    console.log(dir(chapter));
  }
};
