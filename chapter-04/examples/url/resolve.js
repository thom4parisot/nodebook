const url1 = new URL('/node.js/', 'https://oncletom.io');
const url2 = new URL('../', 'https://oncletom.io/node.js/');

console.log(url1.toString()); // <1>
console.log(url2.toString()); // <2>
