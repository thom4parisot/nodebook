const mot = '  Node.js  ';

console.log(mot.trim());      // <1>
console.log(mot.trimLeft());  // <2>
console.log(mot.trimRight()); // <3>

const swiftCode = 'BARCGB22';

console.log(swiftCode.padEnd(11, 'X')); // <4>
