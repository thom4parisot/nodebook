'use strict';

var fs = require('fs');
var join = require('path').join;
var dataDir = join(__dirname, '..', '..', 'data');
var filename = join(dataDir, 'datalocale-20140320-daily.json');

fs.createReadStream(filename)
  .on('data', function(chunk){
    var jsonContent = JSON.parse(String(chunk)); // <1>

    console.log(jsonContent.dependencies);
  })
  .on('error', function(err){
    console.error(err);
  });
