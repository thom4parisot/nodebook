'use strict';

const fs = require('fs');

fs.readdir('.', (err, files) => { // <1>
  console.log(files);             // <2>
});
