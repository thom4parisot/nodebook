'use strict';

const store = new Map();
const primes = new Set([2, 3, 5]);
const config = {
  debug: true,
};

store.set('config', config);
store.set(primes, { count: primes.size });  // <1>

store.forEach((value, key) => console.log(key, value));  // <2>

for (let [key, value] of store) {
  console.log(key, value);  // <3>
}

console.log(store.size);    // <4>
console.log(...store);      // <5>

store.clear();
console.log(...store);      // <6>
