'use strict';

const {spawn} = require('child_process');
const {join} = require('path');
const opn = require('opn');

const DEFAULTS_OPEN = {
  stdio: 'inherit',
  env: process.env,
  shell: true
};

const dir = (chapter) => join(__dirname, '..', '..', `chapter-${chapter}`);

const actions = {
  install: (chapter) => {
    return new Promise((resolve, reject) => {
      const cwd = dir(chapter);

      spawn('npm install', Object.assign({}, {cwd}, DEFAULTS_OPEN))
        .on('close', () => resolve())
        .on('error', (err) => reject(err));
    });
  },

  cd: (chapter) => opn(dir(chapter), { wait: false, app: 'terminal' }),

  examples: (chapter) => opn(dir(chapter), { wait: false }),
}

module.exports = {
  command: 'chapter <number> [install|examples]',
  desc: 'Installe, ouvre les examples ou positionne dans un chapitre.',
  builder: (yargs) => {
    return yargs
      .option('number', { type: 'number' })
      .coerce('number', arg => `${arg < 10 ? 0 : ''}${arg}`);
  },
  handler: (args) => {
    const {number} = args;

    const action = Object.keys(actions).filter(d => args[d] === d).pop();

    actions[action || 'cd'](number);
  }
};
