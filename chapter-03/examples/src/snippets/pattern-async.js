'use strict';

var fs = require('fs');
var join = require('path').join;
var filename = join(__dirname, 'route.js');

fs.exists(filename, function(exists){
  if (exists) {
    fs.readFile(filename, function(err, fileBuffer){
      if (err) {
        throw err;
      }

      console.log(String(fileBuffer));
    });
  }
});