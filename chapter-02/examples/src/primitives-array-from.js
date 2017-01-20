'use strict';

function logArguments() {
  console.log(Array.from(arguments));
}

const logIterable = (...args) => {
  console.log(Array.from(args));
}

console.log(Array.from('camembert')); // <1>
logArguments(1, 'b', 3, 'd');         // <2>
logIterable(1, 'b', 3, 'd');          // <3>
