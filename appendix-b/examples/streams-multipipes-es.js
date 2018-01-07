'use strict';

const fs = require('fs');
const { join } = require('path');
const JSONStream = require('JSONStream');
const es = require('event-stream');
const filename = join(__dirname, '..', 'package.json');

const readStream = fs.createReadStream(filename);
const resourcesStream = readStream
  .pipe(JSONStream.parse('dependencies.$*'))
  .pipe(es.map((resource, next) => {
    next(null, JSON.stringify(resource.key));
  }));

readStream.pipe(process.stdout);
resourcesStream.pipe(process.stdout);
