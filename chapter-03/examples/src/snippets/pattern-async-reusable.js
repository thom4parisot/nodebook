'use strict';

var join = require('path').join;
var getFilecontent = require('./get-filecontent.js');

function contentSuccess(fileContent){
  console.log(fileContent);
}

function contentFailure(err){
  console.error(err);
}

getFilecontent(join(__dirname, 'route.js'), contentSuccess, contentFailure);