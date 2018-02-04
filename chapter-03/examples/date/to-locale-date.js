const past = new Date('2013-12-04 10:00:00');

console.log(past.toLocaleDateString());
console.log(past.toLocaleDateString('fr-FR', { month: 'long' }));
