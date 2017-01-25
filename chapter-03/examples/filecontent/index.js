'use strict';

const fs = require('fs');

const getFilecontent = (filename, onSuccess, onError) => {
  fs.exists(filename, (exists) => {
    if (!exists){
      return onError(new Error('File does not exist.'));
    }

    fs.readFile(filename, (err, fileBuffer) => {
      if (err) {
        return onError(err);
      }

      onSuccess(String(fileBuffer));
    });
  });
};

module.exports = getFilecontent;
