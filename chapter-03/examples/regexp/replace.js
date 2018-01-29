
const text = 'I ♥ JavaScript';


console.log(text.replace('♥', 'love'));     // <1>
console.log(text.replace(/\b\w+$/, 'PHP')); // <2>

console.log(text.replace(/^.+(\u{2665}) (\w+)$/u, '$2 $1 me')); // <3>
