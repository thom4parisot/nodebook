'use strict';

function PseudoBookClass(title) {
  this.title = title.trim();
}

const nodeBook = new PseudoBookClass('Node.js universel');

console.log(typeof PseudoBookClass);              // <1>
console.log(typeof nodeBook);                     // <2>

console.log(nodeBook instanceof PseudoBookClass); // <3>
console.log(Object.getPrototypeOf(nodeBook));     // <4>
console.log(Object.getPrototypeOf(nodeBook).constructor.name);  // <5>
