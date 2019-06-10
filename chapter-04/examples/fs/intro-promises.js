'use strict';

const fs = require('fs').promises;

fs.readdir('.')                       // <1>
  .then(files => console.log(files))  // <2>
