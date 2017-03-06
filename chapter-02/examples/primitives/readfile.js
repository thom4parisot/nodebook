'use strict';

const fs = require('fs');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, buffer) => {          // <1>
      if (err) {
        return reject(err);                       // <2>
      }

      resolve(JSON.parse(buffer));                // <3>
    });
  });
};

module.exports = readFilePromise;
