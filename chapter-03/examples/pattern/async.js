'use strict';

const fs = require('fs');
const { join } = require('path');
const filename = join(__dirname, 'route.js');

fs.exists(filename, (exists) => {
  if (exists) {
    fs.readFile(filename, (err, fileBuffer) => {
      if (err) {
        throw err;
      }

      console.log(String(fileBuffer));
    });
  }
});
