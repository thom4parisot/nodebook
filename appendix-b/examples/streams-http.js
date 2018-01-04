'use strict';

const {request} = require('https');
const fs = require('fs');

const BASE_URL = 'https://raw.githubusercontent.com';
const url = `${BASE_URL}/oncletom/nodebook/master/package.json`;

const req = request(url, (res) => {
  res
    .pipe(fs.createWriteStream('/tmp/nodebook.json'))
    .on('finish', () => console.log('Fichier archivé !'));
});

req.end();
