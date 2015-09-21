'use strict';

var mkdirp = require('mkdirp');
var join = require('path').join;
var fs = require('fs');

var filepath = join(__dirname, '..', '..', 'tmp', 'blah', 'blah');

mkdirp(filepath, function(err){
  if (err) {
    return console.error('Une erreur s\'est produite', err);
  }

  fs.writeFile(join(filepath, 'now.txt'), Date.now());
});