'use strict';

const DATA = ['am', 'stram', 'gram'];
const FIND = 'stram';			// <1>
let found;

// Avant ES2015
DATA.some(function(value){
  if (value === FIND) {
    found = value;
    return true;
  }
});

console.log(found);			  // <2>

// Depuis ES2015
found = DATA.find(value => value === FIND);

console.log(found);			  // <2>

const foundIndex = DATA.findIndex(value => value === FIND);

console.log(foundIndex);	// <3>
