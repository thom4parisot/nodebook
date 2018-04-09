const {tmpdir} = require('os');
const {promisify} = require('util');
const {join} = require('path');
const mkdir = promisify(require('fs').mkdir);
const copyFile = promisify(require('fs').copyFile);

const dest_dir = join(tmpdir(), 'test2');

mkdir(dest_dir)
  .then(() => join(dest_dir, 'example-copy.js'))
  .then((dest) => copyFile(__filename, dest))
  //.catch((error) => console.error(error.message))
  .then((files) => console.log(files))
  .catch((error) => console.error(error.message));
