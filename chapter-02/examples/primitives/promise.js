'use strict';

const {join} = require('path');
const readFilePromise = require('./readfile-promise');

const file = join(__dirname, '..', '..', 'package.json');

const logError = err => console.error(err);

readFilePromise(file) // <1>
  .then(pkg => Object.keys(pkg.dependencies).length) // <2>
  .then(count => console.log(count)) // <3>
  .catch(logError); // <4>
