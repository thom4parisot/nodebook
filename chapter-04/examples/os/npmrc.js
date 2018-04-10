const {homedir} = require('os');
const {readFile} = require('fs');
const {join} = require('path');

const file = join(homedir(), '.npmrc');     // <1>

readFile(file, (error, content='') => {
  if (error && error.code !== 'ENOENT') {   // <2>
    return console.log(error);
  }

  console.log(String(content));
});
