'use strict';

const count = ['un', 'zapzap', 'deux', 'trois', 'quatre'];
const [first, , ...end] = count; // <1>

console.log(first); // <2>
console.log(end); // <3>
