'use strict';

const fs = require('graceful-fs');
const { join } = require('path');

const filepath = join(__dirname, '..', '..', 'package.json');

fs.readFile(filepath, { encoding: 'utf-8'}, (err, content) => {
  if (err) {
    return console.error(err);
  }
  
  console.log(JSON.parse(content).name); // <1>
});
