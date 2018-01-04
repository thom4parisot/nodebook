'use strict';

const incrementA = require('./increment-module.js');
const incrementB = require('./increment-module.js');

console.log(incrementA.run());
console.log(incrementB.run());
console.log(incrementA === incrementB);
