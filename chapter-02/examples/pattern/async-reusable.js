'use strict';

const { join } = require('path');
const getFilecontent = require('../filecontent/index.js');
const FILENAME = join(__dirname, '..', 'route.js');

const contentSuccess = (fileContent) => console.log(fileContent);
const contentFailure = (err) => console.error(err);

getFilecontent(FILENAME, contentSuccess, contentFailure);
