'use strict';

const {promisify} = require('util');
const {spawn} = require('child_process');
const exec = promisify(require('child_process').exec);
const {list,dir} = require('./chapters');

const DEFAULTS_OPEN = {
  stdio: 'inherit',
  env: process.env,
  shell: true
};

const run = (command, chapter) => new Promise((resolve, reject) => {
  const cwd = dir(chapter);

  spawn(command, Object.assign({}, {cwd}, DEFAULTS_OPEN))
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

    return Promise.resolve()
      .then(() => exec('npm --version'))
      .then(npmVersion => {
        // take advantage of npm ci if it exists
        // SEE http://blog.npmjs.org/post/171556855892
        return run.bind(null, npmVersion > '5.7.0' ? 'npm ci' : 'npm install');
      })
      .then(command => {
        return chapter === 'all'
          ? Promise.all(list.map(command))
          : command(chapter);
      });
  }
};
