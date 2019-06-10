'use strict';

const fs = require('fs').promises;

fs.rmdir(__dirname).catch((error) => {
  console.error(error.message);   // <1>
});
