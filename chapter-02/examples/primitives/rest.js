'use strict';

const returnNameAndArgs = (name, ...args) => {
  return {name, args};
};

const a = {name: 'Cabécou'};
const b = {name: 'Chaource'};

const {name, args: cheeses} = returnNameAndArgs('Fromages', a, b); // <1>

console.log(name); // <2>
console.log(cheeses); // <3>
