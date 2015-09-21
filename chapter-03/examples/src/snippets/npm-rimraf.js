'use strict';

var rm = require('rimraf');
var join = require('path').join;

var filepath = join(__dirname, '..', '..', 'tmp');

rm(filepath, function(err){
  if (err) {
    return console.error('Une erreur s\'est produite.', err);
  }
});
