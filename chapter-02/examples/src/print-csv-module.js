'use strict';

var fs = require('fs');
var csv = require('comma-separated-values');

module.exports = function readCSVFile(filepath, rowFn){
  fs.readFile(filepath, { encoding: 'utf-8' }, function(err, content){
    if (err){
      throw err;
    }

    (new csv(content, { header: true, delimiter: ';' }))
      .parse()
      .forEach(rowFn);
  });
};
