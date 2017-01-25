'use strict';

const litteral = { literally: 'lateral' };
const litteralCopy = litteral;
const objectCreated = Object.create(litteral);

console.log(litteral.literally);        // <1>
console.log(objectCreated.literally);   // <2>
console.log(litteral === litteralCopy); // <3>
console.log(litteral === objectCreated);// <4>
