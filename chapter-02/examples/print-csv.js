'use strict';

const fs = require('fs');
const {join} = require('path');

const FILENAME = join(__dirname, '..', 'data', 'books.csv');

const parseRows = content => content.split('\n');
const parseRow = rowContent => rowContent.split(';');

fs.readFile(FILENAME, (err, binaryContent) => {
  if (err) {
    throw err;
  }

  parseRows(String(binaryContent).trim())
    .map(parseRow)
    .slice(1)
    .forEach(row => console.log('"%s" a été écrit par %s', row[0], row[1]));
});
