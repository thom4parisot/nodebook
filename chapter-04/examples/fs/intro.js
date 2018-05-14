const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, 'package.json');

fs.readFile(filename, (err, content) => {   // <1>
  console.log(String(content));             // <2>
});
