const past = new Date('2013-12-04 10:00:00');

console.log(past.toLocaleDateString());                 // <1>

const options = { month: 'long' };
console.log(past.toLocaleDateString('fr-FR', options)); // <2>
