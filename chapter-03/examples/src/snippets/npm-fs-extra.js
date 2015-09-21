'use strict';

var fs = require('fs-extra');

fs.copy(__dirname, '/tmp/nodebook-examples', function(err){
  if (err) {
    return console.error('Une erreur s\'est produite.', err);
  }
});