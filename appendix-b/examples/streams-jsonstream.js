'use strict';

const fs = require('fs');
const { join } = require('path');
const JSONStream = require('JSONStream');
const filename = join(__dirname, '..', 'package.json');
let count = 0;

fs.createReadStream(filename)
  .pipe(JSONStream.parse('dependencies.*'))
  .on('data', () => count++)
  .on('end', () => console.log(count))        // <1>
  .on('error', (err) => console.error(err));
