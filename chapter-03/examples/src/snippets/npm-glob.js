'use strict';

var glob = require('glob');
var join = require('path').join;

var options = {
  cwd: join(__dirname, '..', '..')
};

glob('**/cli*.{js,json}', options, function(err, files){
  console.log(files); // <1>
});