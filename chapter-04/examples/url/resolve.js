const url1 = new URL('/v1/', 'https://apprendre-nodejs.fr');
const url2 = new URL('../', 'https://apprendre-nodejs.fr/v1/');

console.log(url1.toString()); // <1>
console.log(url2.toString()); // <2>
