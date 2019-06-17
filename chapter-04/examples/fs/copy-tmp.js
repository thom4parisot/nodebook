'use strict';

const os = require('os');
const {join} = require('path');
const fs = require('fs').promises;

const dest_dir = join(os.tmpdir(), 'test');
const dest_file = join(dest_dir, 'example-copy.js');        // <1>

fs.mkdir(dest_dir)
  .then(() => fs.copyFile(__filename, dest_file))
  .then(() => console.log(`Copie vers ${dest_file} OK !`))  // <2>
  .catch(err => console.error(err.message));
