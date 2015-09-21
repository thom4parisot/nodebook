'use strict';

var excel = require('excel-stream');
var JSONStream = require('JSONStream');

module.exports = {
  toJSON: function toJSON(inStream, outStream){
    return inStream
      .pipe(excel())
      .pipe(JSONStream.stringify())
      .pipe(outStream || process.stdout);
  }
};