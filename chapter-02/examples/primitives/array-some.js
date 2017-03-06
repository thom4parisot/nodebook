'use strict';

const values = [1, 'a', 120, undefined, 4];
const isUndefined = (value) => value === undefined;

console.log(values.some(isUndefined));                 // <1>
console.log(values.every(isUndefined));                // <2>
console.log([undefined, undefined].every(isUndefined));// <3>
