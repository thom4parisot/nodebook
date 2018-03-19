const enfant = require('./enfant-export-multiple.js');

console.log(enfant.number);               // <1>
console.log(enfant.random());             // <2>

module.exports = enfant.random;           // <3>
