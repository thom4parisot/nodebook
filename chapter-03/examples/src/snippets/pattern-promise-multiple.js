'use strict';

var messageAbbr = require('./message-abbr-promisified');
var Promise = require('es6-promise').Promise;

Promise.all([
  messageAbbr('Hennes & Mauritz'),
  messageAbbr('Her Majesty\'s ship'),
  messageAbbr('gentil organisateur')
]).then(function(abbreviations){
  console.log(abbreviations); // <1>
});

console.log('Promesse tenue !'); // <2>