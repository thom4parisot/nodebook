'use strict';

const fs = require('fs-extra');

fs.copy(__dirname, '/tmp/nodebook-examples', (err) => {
  if (err) {
    return console.error('Une erreur s\'est produite.', err);
  }
});
