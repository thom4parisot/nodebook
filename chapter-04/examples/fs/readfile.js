'use strict';

const fs = require('fs').promises;

fs.readFile(__filename).then(console.log);
