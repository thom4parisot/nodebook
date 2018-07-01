const values = [null, 'un', 'deux', 3];

const is_finite = (value) => Number.isFinite(value);
const direct = (value) => value;

console.log(values.filter(is_finite));  // <1>
console.log(values.filter(direct));     // <2>
