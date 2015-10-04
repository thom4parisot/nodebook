'use strict';

let join = require('path').join;
let readFilePromise = require('./readfile-promise');

let files = new Set(['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'examples', 'package.json');
})).values();

function logError(err) {
  console.error(err);
}

let logPackageDeps = (pkg) => console.log(Object.keys(pkg.dependencies || {}));

readFilePromise(files.next().value)
  .then(chapter02Package => {
    logPackageDeps(chapter02Package);             // <1>
  })
  .then(chapter02Package => {                     // <2>
    // ...
    return readFilePromise(files.next().value);   // <3>
  })
  .then(logPackageDeps, logError)                 // <4>
  .catch(logError);                               // <5>
