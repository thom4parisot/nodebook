'use strict';

const fs = require('fs');
const { join } = require('path');
const JSONStream = require('JSONStream');
const dataDir = join(__dirname, '..', '..', 'data');
const filename = join(dataDir, 'datalocale-20140320-daily.json');

const readStream = fs.createReadStream(filename);
const resourcesStream = JSONStream.parse('*.resources');

readStream
  .pipe(resourcesStream)
  .on('data', resource => console.log(resource));

readStream
  .pipe(fs.createWriteStream('/tmp/datalocale-daily-backup.json'));
