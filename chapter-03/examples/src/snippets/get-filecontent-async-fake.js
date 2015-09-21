'use strict';

var fs = require('fs');

module.exports = function getFilecontent(filename, onSuccess, onError){
  if (fs.existsSync(filename)) { // <1>
    try {
      onSuccess(String(fs.readFileSync(filename))); // <2>
    }
    catch (e){
      onError(e);
    }
  }
  else {
    onError(new Error('File does not exist.'));
  }
};