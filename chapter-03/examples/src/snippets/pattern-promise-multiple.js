'use strict';

const messageAbbr = require('./message-abbr-promisified');

Promise.all([
  messageAbbr('Hennes & Mauritz'),
  messageAbbr('Her Majesty\'s ship'),
  messageAbbr('gentil organisateur')
]).then((abbreviations) => console.log(abbreviations)); // <2>

console.log('Promesse tenue !'); // <1>
