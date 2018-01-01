'use strict';

const counter = 3;

console.log(Boolean(''));       // <1>
console.log(Boolean(counter));  // <2>

if (counter) {                  // <3>
  console.log('if (counter) équivaut à if (Boolean(counter))');
}
