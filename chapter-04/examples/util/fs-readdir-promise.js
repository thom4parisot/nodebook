const fs = require('fs');

const readdir = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, files) => {
      error ? reject(error) : resolve(files);
    });
  });
};

readdir(__dirname)
  .then((files) => console.log(files))
  .catch((error) => console.error(error.message));
