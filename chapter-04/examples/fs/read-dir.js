const fs = require('fs');             // <1>

fs.readdir('.', (error, files) => {   // <2>
  console.log(files);                 // <3>
});
