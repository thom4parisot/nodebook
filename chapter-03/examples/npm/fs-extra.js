'use strict';

const { join } = require('path');
const fs = require('fs-extra');

const tmp = join(__dirname, '..', '..', 'tmp');
const dirpath = join(tmp, 'nodebook-examples');

fs.ensureDir(tmp, function (err) {
    console.log('Dossier crée :', tmp);
});

fs.remove(dirpath, () => {
  fs.copy(__dirname, dirpath, (err) => {
    if (err) {
      return console.error('Une erreur s\'est produite.', err);
    }
    else {
      return console.log('Dossier copié :', dirpath);
    }
  });
});
