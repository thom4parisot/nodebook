'use strict';

let rm = require('rimraf');
let join = require('path').join;

let filepath = join(__dirname, '..', '..', 'tmp');

rm(filepath, err =>
  if (err) {
    return console.error('Une erreur s\'est produite.', err);
  }
});
