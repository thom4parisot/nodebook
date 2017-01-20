'use strict';

const fs = require('fs');
const { join } = require('path');
const dataDir = join(__dirname, '..', '..', 'data');
const filename = join(dataDir, 'package.json');

fs.readFile(filename, (err, binaryContent) => {
  if (err) {
    //...
  }
  
  const jsonContent = JSON.parse(String(binaryContent));

  console.log(jsonContent.dependencies);
});
