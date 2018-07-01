const fs = require('fs');
const {join} = require('path');

const filename_copy = join(__dirname, 'copie.js');
const read = fs.createReadStream(__filename);
read.on('end', () => console.log('Lecture terminée !'));

read.pipe(fs.createWriteStream(filename_copy)); // <1>
read.pipe(process.stdout);                      // <2>
