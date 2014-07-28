'use strict';

var fs = require('fs');
var join = require('path').join;
var csv = require('comma-separated-values');

var FILENAME = join(__dirname, 'data', 'books.csv');

fs.readFile(FILENAME, { encoding: 'utf-8' }, function(err, content){
  if (err){
    throw err;
  }

  (new csv(content, { header: true, delimiter: ';' }))
    .parse()
    .forEach(function(row){
      console.log('"%s" a été écrit par %s', row['Titre'], row['Auteur(s)']);
    });
});