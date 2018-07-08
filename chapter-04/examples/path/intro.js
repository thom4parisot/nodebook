const path = require('path');

console.log(path.dirname('/tmp/package.json'));   // <1>
console.log(path.basename('/tmp/package.json'));  // <2>
console.log(path.extname('/tmp/package.json'));   // <3>
