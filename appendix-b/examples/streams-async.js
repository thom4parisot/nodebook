'use strict';

const fs = require('fs');
const { join } = require('path');
const dataDir = join(__dirname, '..', '..');
const filename = join(dataDir, 'package.json');

fs.readFile(filename, (err, binaryContent) => {
  if (err) {
    return console.error(err);
  }

  const jsonContent = JSON.parse(String(binaryContent));

  console.log(jsonContent.dependencies);
});
