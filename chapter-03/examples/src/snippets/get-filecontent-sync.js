'use strict';

var fs = require('fs');

module.exports = function getFilecontent(filename){
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