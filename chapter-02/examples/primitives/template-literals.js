'use strict';

const lang = 'JavaScript';
const {basename} = require('path');

console.log(
  `I ♥ ${lang}.
Cet exemple se trouve dans le fichier "${basename(__filename)}"`,
); // <1>
