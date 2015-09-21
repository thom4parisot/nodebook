'use strict';

var fs = require('fs');
var join = require('path').join;
var JSONStream = require('JSONStream');
var es = require('event-stream');
var dataDir = join(__dirname, '..', '..', 'data');
var filename = join(dataDir, 'datalocale-20140320-daily.json');

var readStream = fs.createReadStream(filename);
var resourcesStream = readStream
  .pipe(JSONStream.parse('*.resources.*'))
  .pipe(es.mapSync(function(resource){
    return JSON.stringify(resource);
  }));

readStream
  .pipe(fs.createWriteStream('/tmp/datalocale-daily-backup.json'));

resourcesStream
  .pipe(fs.createWriteStream('/tmp/datalocale-resources.json'));

resourcesStream.pipe(process.stdout);
