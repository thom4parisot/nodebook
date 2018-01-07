'use strict';

const {spawn} = require('child_process');
const {join} = require('path');
const {list,dir} = require('./chapters');

const DEFAULTS_OPEN = {
  stdio: 'inherit',
  env: process.env,
  shell: true
};

const install = (chapter) => new Promise((resolve, reject) => {
  const cwd = dir(chapter);

  spawn('npm install', Object.assign({}, {cwd}, DEFAULTS_OPEN))
    .on('close', () => resolve())
    .on('error', (err) => reject(err));
});

module.exports = {
  command: 'install <chapter|all>',
  desc: 'Installe les dépendances d\'un chapitre.',
  builder: (yargs) => {
    return yargs
      .positional('chapter', {
        type: 'string',
        choices: ['all'].concat(list),
      });
  },
  handler: (args) => {
    const {chapter} = args;

    return chapter === 'all'
      ? Promise.all(list.map(install))
      : install(chapter);
  }
};
