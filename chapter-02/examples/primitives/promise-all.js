'use strict';

const {join} = require('path');
const readFilePromise = require('./readfile-promise');

const files = ['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'package.json');
});

const logError = err => console.error(err);

Promise
  .all(files.map(readFilePromise)) // <1>
  .then(allPkgs => allPkgs.reduce(
    (count, pkg) => {
      // <2>
      return count + Object.keys(pkg.dependencies || {}).length;
    },
    0,
  ))
  .then(count => console.log(count)) // <3>
  .catch(logError);
