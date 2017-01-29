'use strict';

const mkdirp = require('mkdirp');
const rm = require('rimraf');
const { join } = require('path');
const fs = require('fs-extra');

const dirpath = join(__dirname, '..', '..', 'tmp', 'nodebook-examples');

fs.ensureDir(dirpath, function (err) {
  if (err) {
    fs.mkdirp(dirpath);
    console.log('Dossier crée :', dirpath);
  }
})

rm(dirpath, () => {
  fs.copy(__dirname, dirpath, (err) => {
    if (err) {
      return console.error('Une erreur s\'est produite.', err);
    }
    else {
      return console.log('Dossier copié : ', dirpath);
    }
  });
});
