'use strict';

const setupFormatter = require('./currency-format.js');
const formatCurrency = setupFormatter('FR');

console.log(typeof currencies);
console.log(formatCurrency(12));
