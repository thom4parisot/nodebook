'use strict';

const {magentaBright, green, bgRed} = require('chalk');

console.log(`${magentaBright('Hello')} World`); // <1>
console.log(`${green.italic('Hello')} World`);  // <2>
console.log(`${bgRed('Hello')} World`);         // <3>
