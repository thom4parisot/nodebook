'use strict';

var join = require('path').join;
var getFilecontent = require('./get-filecontent-sync-fake.js');

function contentSuccess(fileContent){
  console.log(fileContent);
}

function contentFailure(err){
  console.error(err);
}

var fileContent = getFilecontent(join(__dirname, 'route.js'));

if (fileContent instanceof Error){
  contentFailure(fileContent);
}
else {
  contentSuccess(fileContent);
}