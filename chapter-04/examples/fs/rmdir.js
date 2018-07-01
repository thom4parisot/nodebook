const fs = require('fs');

fs.rmdir(__dirname, (error) => {
  console.error(error.message);   // <1>
});
