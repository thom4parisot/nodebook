const {promisify} = require('util');
const readdir = promisify(require('fs').readdir);   // <1>

readdir(__dirname)                                  // <2>
  .then((files) => console.log(files))              // <3>
  .catch((error) => console.error(error.message));
