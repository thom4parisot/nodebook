const {createReadStream} = require('fs');

createReadStream(__filename)                    // <1>
  .on('data', (data) => {                       // <2>
    console.log('%d octets lus', data.length);  // <3>
  });
