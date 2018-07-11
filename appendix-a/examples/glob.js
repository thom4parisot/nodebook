'use strict';

const {promisify} = require('util');
const glob = promisify(require('glob'));

glob('*.js').then(console.log);     // <1>
glob('re*.js').then(console.log);   // <2>
glob('sample.*').then(console.log); // <3>
