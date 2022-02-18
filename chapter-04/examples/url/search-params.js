const example = new URL('https://thom4.net/');
example.searchParams.set('search', 'node.js');

console.log(example.toString());               // <1>
console.log(example.searchParams.toString());  // <2>

example.searchParams.delete('search');
console.log(example.toString());               // <3>
