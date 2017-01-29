'use strict';

const fs = require('fs');

const getFilecontent = (filename, onSuccess, onError) => {
  fs.readFile(filename, (err, fileBuffer) => {
    if (err) {
      return onError(err);
    }

    onSuccess(String(fileBuffer));
  });
};

module.exports = getFilecontent;
