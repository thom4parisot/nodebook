'use strict';

const fs = require('fs').promises;

fs.readFile(__filename, 'utf8').then(console.log);
