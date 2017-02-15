'use strict';

const primes = new Set([11, 13]); // <1>
const primesArray = Array.from(primes);
console.log(primesArray); // <2>

const example = new Set();
example.add(2);
example.add(3);
example.add([5, 7]);
example.add([5, 7]); // <3>
example.add(primes); // <4>
example.add(primesArray);
example.add(primesArray); // <5>

console.log(example); // <6>
console.log([...example]); // <7>
