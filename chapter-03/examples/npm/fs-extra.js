'use strict';

const { join } = require('path');
const pify = require('pify');
const fs = pify(require('fs-extra'));

const tmp = join(__dirname, '..', '..', 'tmp');
const dirpath = join(tmp, 'nodebook-examples');

Promise.resolve(tmp)
  .then(tmp => fs.ensureDir(tmp))
  .then((result) => result && console.log('Dossier créé : %s', result))
  .then(() => fs.remove(dirpath))
  .then(() => fs.copy(__dirname, dirpath))
  .then(() => console.log('Dossier copié : %s', dirpath))
  .catch(err => console.error('Une erreur s\'est produite.', err));
