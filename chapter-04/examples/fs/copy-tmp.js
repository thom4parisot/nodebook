'use strict';

const os = require('os');
const {join} = require('path');
const fs = require('fs').promises;

const dest_dir = join(os.tmpdir(), 'test');
const dest = join(dest_dir, 'example-copy.js');        // <1>

fs.mkdir(dest_dir)
  .then(() => fs.copyFile(__filename, dest))
  .then(() => console.log(`Copie vers ${dest} OK !`))  // <2>
  .catch(err => console.error(err.message));
