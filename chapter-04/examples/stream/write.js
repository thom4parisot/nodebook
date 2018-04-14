const {createWriteStream, readFile} = require('fs');
const {join} = require('path');

const dest = join(__dirname, 'debug.txt');
const stream = createWriteStream(dest);                       // <1>

stream.on('finish', () => {
  readFile(dest, (error, data) => console.log(String(data))); // <4>
});

stream.write('Hell');                                         // <2>
stream.write('o Worl');
stream.end('d!');                                             // <3>
