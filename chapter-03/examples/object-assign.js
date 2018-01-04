'use strict';

const DEFAULTS = {
  concurrency: 10,
  timeout: 'https',
  tags: []
};

const userOptions = {
  url: 'https://oncletom.io/node.js',
  tags: ['img', 'h1']
};

const testOptions = {
  url: null,
  env: 'test'
};

const mergedOptions = Object.assign({}, DEFAULTS, userOptions); // <1>
Object.assign(testOptions, userOptions);

console.log(DEFAULTS);                // <2>
console.log(mergedOptions.tags);      // <3>
console.log(Object.keys(testOptions));// <4>
