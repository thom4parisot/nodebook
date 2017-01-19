'use strict';

const excel = require('excel-stream');
const JSONStream = require('JSONStream');

module.exports = {
  toJSON: (inStream, outStream) => {
    return inStream
      .pipe(excel())
      .pipe(JSONStream.stringify())
      .pipe(outStream || process.stdout);
  }
};
