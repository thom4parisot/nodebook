'use strict';

const pify = require('pify');
const messageAbbr = pify(require('../message-abbr'));

Promise.all([
  messageAbbr('Hennes & Mauritz'),
  messageAbbr('Her Majesty\'s ship'),
  messageAbbr('gentil organisateur')
]).then((abbreviations) => console.log(abbreviations)); // <2>

console.log('Promesse tenue !'); // <1>
