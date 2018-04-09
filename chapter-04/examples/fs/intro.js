const fs = require('fs');

fs.readFile(__filename, (err, content) => {   // <1>
  console.log(String(content));               // <2>
});
