const paris15 = '75015 Paris';
const avray = '92410 Ville-d\'Avray';

// test du code postal uniquement
console.log(paris15.match(/[0-9]{2}/));          // <1>
console.log(paris15.match(/[0-9]{2,5}/));        // <2>

// test du code postal et de la ville
console.log(paris15.match(/[0-9]{5} [a-zA-Z]+/)); // <3>
console.log(paris15.match(/[0-9]{5} [a-z]+/i));   // <4>

// test sur un nom de ville composé
console.log(avray.match(/[0-9]{5} [a-z]+/i));     // <5>
console.log(avray.match(/[0-9]{5} [a-z'-]+/i));   // <6>
