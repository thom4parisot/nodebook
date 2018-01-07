'use strict';

const fs = require('fs');
const { join } = require('path');
const JSONStream = require('JSONStream');
const filename = join(__dirname, '..', 'package.json');

const readStream = fs.createReadStream(filename);
const dependencyStream = JSONStream.parse('dependencies.$*');

readStream
  .pipe(dependencyStream)
  .on('data', resource => console.log(resource));

readStream.pipe(process.stdout);
