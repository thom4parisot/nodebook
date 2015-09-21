'use strict';

var fs = require('fs');
var join = require('path').join;
var JSONStream = require('JSONStream');
var dataDir = join(__dirname, '..', '..', 'data');
var filename = join(dataDir, 'datalocale-20140320-daily.json');

var readStream = fs.createReadStream(filename);
var resourcesStream = JSONStream.parse('*.resources');

readStream
  .pipe(resourcesStream)
  .on('data', function(resource){
    console.log(resource);
  });

readStream
  .pipe(fs.createWriteStream('/tmp/datalocale-daily-backup.json'));
