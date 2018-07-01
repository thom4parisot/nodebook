const {createReadStream} = require('fs');

createReadStream(__filename, {highWaterMark: 100})  // <1>
  .on('end', () => console.log('Lecture terminée')) // <2>
  .on('data', (data) => {
    console.log('%d octets reçus', data.length);
  });
