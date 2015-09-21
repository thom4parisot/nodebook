'use strict';

var request = require('request');
var fs = require('fs');

var url = 'https://raw.githubusercontent.com' +
  '/oncletom/nodebook.chapter-03/master/package.json';

request(url)
  .pipe(fs.createWriteStream('/tmp/nodebook-chap03.json'))
  .on('finish', function(){
    console.log('Fichier archivé !');
  });