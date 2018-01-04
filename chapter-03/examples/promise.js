'use strict';

const p = new Promise((resolve, reject) => resolve('deux'));

p.then(label => {
    console.log(label);                 // <2>

    return label.toUpperCase();
  })
  .then(LABEL => console.log(LABEL))    // <3>
  .then(LABEL => console.log(LABEL))    // <4>

console.log('un');                      // <1>
