const path = require('path');

const relative_diff = path.relative(
  '/tmp/package.json', '/tmp/source'
);
const resolve_diff = path.resolve(
  '/tmp/package.json', '..', './source'
);

console.log(relative_diff);     // <1>
console.log(resolve_diff);      // <2>
