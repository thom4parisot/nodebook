'use strict';

const {spawn} = require('child_process');
const {join} = require('path');
const opn = require('opn');

const actions = {
  install: (chapter) => {
    return new Promise((resolve, reject) => {
      const npmi = spawn('npm install', {
        cwd: join(__dirname, '..', '..', `chapter-${chapter}`),
        stdio: 'inherit',
        env: process.env,
        shell: true
      });

      npmi.on('close', () => resolve());
      npmi.on('error', (err) => reject(err));
    });
  },

  start: (chapter) => {
    return spawn('npm start', {
      cwd: join(__dirname, '..', '..', `chapter-${chapter}`),
      stdio: 'inherit',
      env: process.env,
      shell: true
    });
  },

  open: (chapter) => {
    const path = join(__dirname, '..', '..', `chapter-${chapter}`);

    return opn(path, {
      wait: false
    });
  }
}

module.exports = {
  command: 'chapter <number> <install|open|start>',
  desc: 'Installe, ouvre ou démarre un chapitre.',
  builder: (yargs) => {
    return yargs
      .options({
        number: {
          type: 'number',
        }
      })
      .coerce('number', arg => `${arg < 10 ? 0 : ''}${arg}`);
  },
  handler: (args) => {
    const {number} = args;

    ['install', 'open', 'start'].some(action => {
      if (args[action] === action) {

        actions[action](number);
        return true;
      }
    });
  }
};
