const values = [null, 'un', 'deux', 3];

console.log(values.filter(value => Number.isFinite(value)));  // <1>
console.log(values.filter(value => value));                   // <2>
