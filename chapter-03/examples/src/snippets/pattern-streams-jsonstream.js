'use strict';

var fs = require('fs');
var join = require('path').join;
var JSONStream = require('JSONStream');
var dataDir = join(__dirname, '..', '..', 'data');
var filename = join(dataDir, 'datalocale-20140320-daily.json');
var count = 0;

fs.createReadStream(filename)
  .pipe(JSONStream.parse('*'))
  .on('data', function(chunk){
    count++;
  })
  .on('end', function(){
    console.log(count); // <1>
  })
  .on('error', function(err){
    console.error(err);
  });
