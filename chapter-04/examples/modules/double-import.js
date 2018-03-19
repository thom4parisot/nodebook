const first = require('./increment.js');
const second = require('./increment.js');

console.log(first());   // <1>
console.log(first());   // <2>
console.log(second());  // <3>
