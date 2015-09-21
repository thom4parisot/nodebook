'use strict';

var fs = require('graceful-fs');
var join = require('path').join;

var filepath = join(__dirname, '..', '..', 'package.json');

fs.readFile(filepath, { encoding: 'utf-8'}, function(err, content){
  console.log(JSON.parse(content).name); // <1>
});