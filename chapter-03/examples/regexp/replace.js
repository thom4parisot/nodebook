const t = 'I ♥ JavaScript';

console.log(t.replace('♥', 'love'));    // <1>
console.log(t.replace(/\b\w+$/, 'PHP'));// <2>

const text = t.replace(/^.+(\u{2665}) (\w+)$/u, '$2 $1 me');
console.log(text);                      // <3>
