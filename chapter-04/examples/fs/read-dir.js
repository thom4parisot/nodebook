const fs = require('fs');           // <1>

fs.readdir('.', (err, files) => {   // <2>
  if (err) {
    throw err;
  }

  console.log(files);               // <3>
});
