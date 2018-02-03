const values = [1, 'a', 120, undefined, 4];
const isUndefined = (value) => value === undefined;

console.log(values.every(isUndefined));                // <1>
console.log(values.some(isUndefined));                 // <2>
console.log(values.filter(d => d).some(isUndefined));  // <3>
