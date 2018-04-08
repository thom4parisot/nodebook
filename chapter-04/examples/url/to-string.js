const {URL, format} = require('url');

const example = new URL('https://oncletom.io/node.js/');
example.pathname = '/';
example.hash = '#top';

console.log(example.toString());  // <1>
console.log(format(example));     // <2>
