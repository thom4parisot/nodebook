'use strict';

const S = require('string');
const title = S('Blog Post');

console.log(title.slugify().s);                   // <1>
console.log(title.wrapHTML('h1').s);              // <2>
console.log(title.wrapHTML('h1').escapeHTML().s); // <3>
