const values = [null, 2, 10, 100];

const biggerThan50 = (value) => value > 50;   // <1>

console.log(values.find(biggerThan50));       // <2>
console.log(values.findIndex(biggerThan50));  // <3>
