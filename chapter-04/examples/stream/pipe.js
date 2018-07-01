const {createReadStream, createWriteStream} = require('fs');
const {join} = require('path');

const filename_copy = join(__dirname, 'copie.js');
const source = createReadStream(__filename);            // <1>
const dest = createWriteStream(filename_copy);          // <2>

source.pipe(dest)                                       // <3>
  .on('finish', () => console.log('Copie terminée !')); // <4>
