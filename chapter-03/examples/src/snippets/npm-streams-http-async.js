'use strict';

var request = require('request');
var fs = require('fs');

var url = 'https://raw.githubusercontent.com' +
  '/oncletom/nodebook.chapter-03/master/package.json';

request(url, function(err, response, body){
  fs.writeFile('/tmp/nodebook-chap03.json', body, function(err){
    if (err){
      return console.error(err);
    }

    console.log('Fichier archivé !');
  });
});