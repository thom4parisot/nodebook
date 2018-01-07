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
  command: 'open <chapter>',
  desc: 'Ouvre les examples d\'un chapitre.',
  builder: (yargs) => {
    return yargs
      .positional('chapter', {
        type: 'string',
        choices: list,
      });
  },
  handler: (args) => {
    const {chapter} = args;

    console.log(chapter)

    opn(dir(chapter), { wait: false, app: 'terminal' })
  }
};
