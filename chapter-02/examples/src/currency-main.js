'use strict';

var setupFormatter = require('./currency-format.js');
var formatCurrency = setupFormatter('FR');

console.log(typeof currencies);
console.log(formatCurrency(12));