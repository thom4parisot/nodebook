'use strict';

const { join } = require('path');
const getFilecontent = require('../filecontent/sync.js');

const contentSuccess = fileContent => console.log(fileContent);
const contentFailure = err => console.error(err);

const fileContent = getFilecontent(join(__dirname, '..', 'route.js'));

if (fileContent instanceof Error){
  contentFailure(fileContent);
}
else {
  contentSuccess(fileContent);
}
