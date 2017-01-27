'use strict';

const fs = require('fs');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {       // <1>
    fs.readFile(file, (err, buffer) => {          // <2>
      if (err) {
        return reject(err);                       // <3>
      }

      resolve(JSON.parse(buffer));                // <4>
    });
  });
};

module.exports = readFilePromise;
