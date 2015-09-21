'use strict';

var fs = require('fs');

module.exports = function getFilecontent(filename, onSuccess, onError){
  fs.exists(filename, function(exists){
    if (!exists){
      return onError(new Error('File does not exist.'));
    }

    fs.readFile(filename, function(err, fileBuffer){
      if (err) {
        return onError(err);
      }

      onSuccess(String(fileBuffer));
    });
  });
};