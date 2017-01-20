'use strict';

const join = require('path').join;
const readFilePromise = require('./readfile-promise');

const files = ['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'examples', 'package.json');
});

const logError = (err) => console.error(err);

const logPackageDeps = (pkg) => console.log(Object.keys(pkg.dependencies || {}));

Promise.all(files.map(readFilePromise))
  .then(allPkgs => {                    // <1>
    const deps = allPkgs.reduce((deps, pkg) => {
      return Object.assign(deps, pkg.dependencies)
    }, {});

    console.log(Object.keys(deps));     // <2>
  })
  .catch(logError);
