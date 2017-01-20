'use strict';

const { join } = require('path');
const getFilecontent = require('./get-filecontent.js');

const contentSuccess = (fileContent) => console.log(fileContent);
const contentFailure = (err) => console.error(err);

getFilecontent(join(__dirname, 'route.js'), contentSuccess, contentFailure);
