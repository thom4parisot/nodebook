'use strict';

const {join} = require('path');
const fs = require('fs-extra');
const {log, error} = console;

const tmp = join(__dirname, '..', '..', 'tmp');
const dirpath = join(tmp, 'nodebook-examples');

Promise.resolve(tmp)
  .then(tmp => fs.ensureDir(tmp))
  .then((result) => result && log('Dossier créé : %s', result))
  .then(() => fs.remove(dirpath))
  .then(() => fs.copy(__dirname, dirpath))
  .then(() => log('Dossier copié : %s', dirpath))
  .catch(err => error('Une erreur s\'est produite.', err));
