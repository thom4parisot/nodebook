'use strict';

var fs = require('fs');
var join = require('path').join;
var dataDir = join(__dirname, '..', '..', 'data');
var filename = join(dataDir, 'package.json');

fs.readFile(filename, function(err, binaryContent){
  var jsonContent = JSON.parse(String(binaryContent));

  console.log(jsonContent.dependencies);
});