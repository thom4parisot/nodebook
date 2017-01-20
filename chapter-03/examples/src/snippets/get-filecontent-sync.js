'use strict';

const fs = require('fs');

const getFilecontent = (filename) => {
  if (fs.existsSync(filename)) {
    try {
      return String(fs.readFileSync(filename));
    }
    catch (e){
      return e;
    }
  }
  else {
    return new Error('File does not exist.');
  }
};

module.exports = getFilecontent;
