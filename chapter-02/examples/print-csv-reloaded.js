'use strict';

const fs = require('fs');
const {join} = require('path');
const csv = require('comma-separated-values'); // <1>
const FILENAME = join(__dirname, '..', 'data', 'books.csv');

fs.readFile(FILENAME, (err, binaryContent) => {
  if (err) {
    return console.error(err);
  }

  const csvFile = new csv(String(binaryContent), {
    header: true,
    delimiter: ';',
  }); // <2>

  console.log(csvFile.parse()); // <3>
});
