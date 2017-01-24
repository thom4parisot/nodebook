'use strict';

const { join } = require('path');
const readFilePromise = require('./readfile-promise');

const files = new Set(['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'examples', 'package.json');
})).values();

const logError = (err) => console.error(err);
const logPackageDeps = (pkg) => console.log(Object.keys(pkg.dependencies || {}));

readFilePromise(files.next().value)
  .then(chapter02Package => {
    logPackageDeps(chapter02Package);             // <1>
  })
  .then(chapter02Package => {                     // <2>
    console.log(chapter02Package);

    return readFilePromise(files.next().value);   // <3>
  })
  .then(logPackageDeps, logError)                 // <4>
  .catch(logError);                               // <5>
