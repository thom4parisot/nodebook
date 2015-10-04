'use strict';

let fs = require('fs');

module.exports = function readFilePromise(file) {
  return new Promise((resolve, reject) => {       // <1>
    fs.readFile(file, (err, buffer) => {          // <2>
      if (err) {
        return reject(err);                       // <3>
      }

      resolve(JSON.parse(buffer));                // <4>
    });
  });
}

// readFilePromise(file).then(onSuccess, onError)
