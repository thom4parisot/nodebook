'use strict';

const {request} = require('https');
const fs = require('fs');

const BASE_URL = 'https://raw.githubusercontent.com';
const url = `${BASE_URL}/oncletom/nodebook/master/package.json`;

const req = request(url, (res) => {
  let body = '';

  res.on('error', err => console.error(err));
  res.on('data', data => body += data);
  res.on('end', () => {
    fs.writeFile('/tmp/nodebook.json', body, (err) => {
      if (err){
        return console.error(err);
      }

      console.log('Fichier archivé !');
    });
  });
});

req.end();
