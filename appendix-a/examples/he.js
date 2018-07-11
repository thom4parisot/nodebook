'use strict';

const {encode} = require('he');
const html = '<h1>Blog Post</h1>';

console.log(html);                   // <1>
console.log(encode(html));           // <2>
