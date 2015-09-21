'use strict';

var S = require('string');

var title = S('Blog Post');

console.log(title.slugify().s); // <1>
console.log(title.wrapHTML('h1').s); // <2>
console.log(title.wrapHTML('h1').escapeHTML().s); // <3>