const p = new Promise((resolve) => resolve('promesse tenue'));

console.log(p);                           // <1>
console.log('un');                        // <2>
p.then(message => console.log(message));  // <4>
console.log('deux');                      // <3>
