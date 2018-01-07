'use strict';

const fs = require('fs');
const { join } = require('path');
const filename = join(__dirname, '..', 'index.adoc');

fs.readFile(filename, (err, fileBuffer) => {
  if (err) {
    return console.error(err);
  }

  console.log(String(fileBuffer));
});
