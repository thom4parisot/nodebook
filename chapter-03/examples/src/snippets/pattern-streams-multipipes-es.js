'use strict';

const fs = require('fs');
const { join } = require('path');
const JSONStream = require('JSONStream');
const es = require('event-stream');
const dataDir = join(__dirname, '..', '..', 'data');
const filename = join(dataDir, 'datalocale-20140320-daily.json');

const readStream = fs.createReadStream(filename);
const resourcesStream = readStream
  .pipe(JSONStream.parse('*.resources.*'))
  .pipe(es.map((resource, next) => {
    next(null, JSON.stringify(resource));
  }));

readStream
  .pipe(fs.createWriteStream('/tmp/datalocale-daily-backup.json'));

resourcesStream
  .pipe(fs.createWriteStream('/tmp/datalocale-resources.json'));

resourcesStream.pipe(process.stdout);
