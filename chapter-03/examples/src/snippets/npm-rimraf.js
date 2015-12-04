'use strict';

const rm = require('rimraf');
const join = require('path').join;

const filepath = join(__dirname, '..', '..', 'tmp');

rm(filepath, err => {
  if (err) {
    return console.error('Une erreur s\'est produite.', err);
  }
});
