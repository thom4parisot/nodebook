'use strict';

const request = require('request');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com' +
  '/oncletom/nodebook/master/chapter-03/examples/package.json';

request(url)
  .pipe(fs.createWriteStream('/tmp/nodebook-chap03.json'))
  .on('finish', () => console.log('Fichier archivé !'));
