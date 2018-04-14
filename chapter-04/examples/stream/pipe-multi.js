const {createReadStream, createWriteStream} = require('fs');
const {join} = require('path');

const read = createReadStream(__filename);
read.on('end', () => console.log('Lecture terminée !'));

read.pipe(createWriteStream(join(__dirname, 'copie.js')));  // <1>
read.pipe(process.stdout);                                  // <2>
