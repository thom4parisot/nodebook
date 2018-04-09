const {tmpdir} = require('os');
const {join} = require('path');
const fs = require('fs');

const dest_dir = join(tmpdir(), 'test');          // <1>

fs.mkdir(dest_dir, (error) => {                   // <2>
  const dest = join(dest_dir, 'example-copy.js');

  fs.copyFile(__filename, dest, (error) => {      // <3>
    if (error === null) {
      console.log(`La copie vers ${dest} s'est bien passée.`);
    }
  });
});
