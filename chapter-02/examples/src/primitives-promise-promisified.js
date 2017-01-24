'use strict';

const { join } = require('path');
const fs = require('fs');
const promisify = require('pify');
const { readFile:readFilePromise } = promisify(fs);  // <1>

const files = ['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'examples', 'package.json');
});

const allPromises = files.map(file => readFilePromise(file));

Promise.all(allPromises)
  .then(allFiles => {
    const deps = allFiles.reduce((deps, fileBuffer) => {
      const pkg = JSON.parse(String(fileBuffer));
      return Object.assign(deps, pkg.dependencies);
    }, {});

    console.log(Object.keys(deps).length);           // <2>
  })
  .catch((err) => console.error(err));
