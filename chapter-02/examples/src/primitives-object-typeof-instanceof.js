'use strict';

function pseudoBookClass(title) {
  this.title = title.trim();
}

let nodeBook = new pseudoBookClass('Node.js universel');

console.log(typeof pseudoBookClass);              // <1>
console.log(typeof nodeBook);                     // <2>

console.log(nodeBook instanceof pseudoBookClass); // <3>
console.log(Object.getPrototypeOf(nodeBook));     // <4>
console.log(Object.getPrototypeOf(nodeBook).constructor.name);  // <5>
