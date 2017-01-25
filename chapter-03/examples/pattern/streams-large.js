'use strict';

const fs = require('fs');
const { join } = require('path');
const dataDir = join(__dirname, '..', '..', 'data');
const filename = join(dataDir, 'datalocale-20140320-daily.json');

fs.createReadStream(filename)
  .on('data', (chunk) => {
    const jsonContent = JSON.parse(String(chunk)); // <1>

    console.log(jsonContent);
  })
  .on('error', err => console.error(err));
