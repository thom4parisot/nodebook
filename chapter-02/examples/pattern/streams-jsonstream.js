'use strict';

const fs = require('fs');
const { join } = require('path');
const JSONStream = require('JSONStream');
const dataDir = join(__dirname, '..', '..', 'data');
const filename = join(dataDir, 'datalocale-20140320-daily.json');
let count = 0;

fs.createReadStream(filename)
  .pipe(JSONStream.parse('*'))
  .on('data', () => count++)
  .on('end', () => console.log(count)) // <1>
  .on('error', (err) => console.error(err));
