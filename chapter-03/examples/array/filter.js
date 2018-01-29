'use strict';

const values = [1, 'a', 120, undefined, 0];

console.log(values.filter(value => value < 10)); // <1>
console.log(values.filter(value => value));      // <2>
