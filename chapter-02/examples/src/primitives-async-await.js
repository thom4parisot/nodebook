'use strict';

const { join } = require('path');
const fs = require('fs');
const promisify = require('pify');
const { readFile:readFilePromise } = promisify(fs);

const files = ['chapter-02', 'chapter-01', 'chapter-03'].map(dir => {
  return join(__dirname, '..', '..', '..', dir, 'examples', 'package.json');
});

async function getAllDeps (files) {                      // <1>
  const deps = {};

  for (let filePath of files) {
    const fileBuffer = await readFilePromise(filePath);  // <2>
    const pkg = JSON.parse(String(fileBuffer));          // <3>

    Object.assign(deps, pkg.dependencies);
  }

  return deps;
}

getAllDeps(files)                                        // <4>
  .then(deps => console.log(Object.keys(deps).length))   // <5>
  .catch(err => console.error(err));
