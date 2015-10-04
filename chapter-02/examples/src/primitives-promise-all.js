'use strict';

let join = require('path').join;
let readFilePromise = require('./readfile-promise');

let files = ['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'examples', 'package.json');
});

function logError(err) {
  console.error(err);
}

let logPackageDeps = (pkg) => console.log(Object.keys(pkg.dependencies || {}));

Promise.all(files.map(readFilePromise))
  .then(allPkgs => {                    // <1>
    let deps = allPkgs.reduce((deps, pkg) => {
      return Object.assign(deps, pkg.dependencies)
    }, {});

    console.log(Object.keys(deps));     // <2>
  })
  .catch(logError);
