'use strict';

var incrementA = require('./increment-module.js');
var incrementB = require('./increment-module.js');

console.log(incrementA.run());
console.log(incrementB.run());
console.log(incrementA === incrementB);