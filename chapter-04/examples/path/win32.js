const {join,resolve} = require('path').win32; // <1>

console.log(join('tmp', 'package.json'));     // <2>
console.log(resolve('C:\\tmp', '../etc'));       // <3>
