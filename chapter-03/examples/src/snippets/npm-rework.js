'use strict';

var rework = require('rework');
var fs = require('fs');
var join = require('path').join;

var colors = require('rework-plugin-colors');
var whitespace = require('css-whitespace');
var vars = require('rework-vars');
var math = require('rework-math');

fs.readFile(join(__dirname, 'stylesheet.css'), function(err, binaryContent){
  var r = rework(whitespace(String(binaryContent)), { source: 'stylesheet.css' })
    .use(vars())
    .use(math())
    .use(colors());

  console.log(r.toString());
});

