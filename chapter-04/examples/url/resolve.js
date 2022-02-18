const url1 = new URL('/node.js/', 'https://thom4.net');
const url2 = new URL('../', 'https://apprendre-nodejs.fr/v1/');

console.log(url1.toString()); // <1>
console.log(url2.toString()); // <2>
