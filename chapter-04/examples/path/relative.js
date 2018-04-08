const path = require('path');

const diff = path.relative('/tmp/package.json', '/tmp/source');

console.log(diff);                                                // <1>
console.log(path.resolve('/tmp/package.json', '..', './source')); // <2>
