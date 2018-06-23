'use strict';

const glob = require('globby');
const {resolve} = require('path');
const patterns = process.argv.slice(2);

const resolveFiles = (files) => {
  return files.map(file => resolve(file));
};

glob(patterns)                                // <1>
  .then(files => resolveFiles(files))         // <2>
  .then(files => console.log(files));         // <3>
