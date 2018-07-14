'use strict';

const {homedir} = require('os');
const fs = require('fs');
fs.readdir(homedir(), (err, files) => {
  err ? console.error(err) : console.log(files);
});
