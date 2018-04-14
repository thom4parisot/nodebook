const {createReadStream, createWriteStream} = require('fs');
const {join} = require('path');

const source = createReadStream(__filename);                  // <1>
const dest = createWriteStream(join(__dirname, 'copie.js'));  // <2>

source.pipe(dest)                                             // <3>
      .on('finish', () => console.log('Copie terminée !'));   // <4>
