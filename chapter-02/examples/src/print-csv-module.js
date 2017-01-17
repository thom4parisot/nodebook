'use strict';

const fs = require('fs');
const csv = require('comma-separated-values');

const readCSVFile = (filepath, rowFn) => {
  fs.readFile(filepath, { encoding: 'utf-8' }, (err, content) => {
    if (err){
      throw err;
    }

    new csv(content, { header: true, delimiter: ';' })
      .parse()
      .forEach(rowFn);
  });
};

module.exports = readCSVFile;
