const {createReadStream} = require('fs');
const {createGzip} = require('zlib');

createReadStream(__filename)
  .pipe(createGzip())         // <1>
  .pipe(process.stdout);      // <2>
