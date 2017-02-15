'use strict';

const request = require('request');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com' +
  '/oncletom/nodebook/master/chapter-03/examples/package.json';

request(url, (err, response, body) => {
  if (err) {
    //...
  }

  fs.writeFile('/tmp/nodebook-chap03.json', body, err => {
    if (err) {
      return console.error(err);
    }

    console.log('Fichier archivé !');
  });
});
