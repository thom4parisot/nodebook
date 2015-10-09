'use strict';

var mkdirp = require('mkdirp');
var rm = require('rimraf');
var join = require('path').join;
var fs = require('fs');

var filepath = join(__dirname, '..', '..', 'tmp', 'blah', 'blah');

rm(filepath, () => {
  mkdirp(filepath, err => {
    if (err) {
      return console.error('Une erreur s\'est produite', err);
    }

    fs.writeFile(join(filepath, 'now.txt'), Date.now());
  });
});
