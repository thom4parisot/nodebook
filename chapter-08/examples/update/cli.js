'use strict';

const parse = require('minimist');
const check = require('update-check');
const pkg = { name: 'nodebook', version: '0.8.0' };

const logError = ({message}) => console.error(message);
const checkUpdate = (update) => {
  if (update) {
    const {name} = pkg;
    console.log(`${name}@${update.latest} est dispo`);
    console.log(`Tape 'npm install -g ${pkg.name}'`);
  }
};

check(pkg)
  .then(checkUpdate, logError)      // <1>
  .then(() => {
    const args = parse(process.argv.slice(2));
    // ...                          // <2>
  });
