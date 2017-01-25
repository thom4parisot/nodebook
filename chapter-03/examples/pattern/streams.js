'use strict';

const fs = require('fs');
const { join } = require('path');
const dataDir = join(__dirname, '..', '..');
const filename = join(dataDir, 'package.json');

fs.createReadStream(filename)
  .on('data', (chunk) => {
    const jsonContent = JSON.parse(String(chunk));

    console.log(jsonContent.dependencies);
  })
  .on('error', (err) => console.error(err));
