'use strict';

var fs = require('fs');
var join = require('path').join;

var FILENAME = join(__dirname, 'data', 'books.csv');

fs.readFile(FILENAME, function(err, binaryContent){
  if (err){
    throw err;
  }

  parseRows(String(binaryContent))
    .map(parseRow)
    .forEach(function(row){
      console.log(row);
    });
});

function parseRows(content){
  return content.split('\n');
}

function parseRow(rowContent){
  return rowContent.split(';');
}
