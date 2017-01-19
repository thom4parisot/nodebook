'use strict';

const mkdirp = require('mkdirp');
const rm = require('rimraf');
const { join } = require('path');
const fs = require('fs');

const filepath = join(__dirname, '..', '..', 'tmp', 'blah', 'blah');

rm(filepath, () => {
  mkdirp(filepath, err => {
    if (err) {
      return console.error('Une erreur s\'est produite', err);
    }

    fs.writeFile(join(filepath, 'now.txt'), Date.now());
  });
});
