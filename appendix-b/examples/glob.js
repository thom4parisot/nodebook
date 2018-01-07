'use strict';

const glob = require('glob');
const {join} = require('path');
const options = {
  cwd: join(__dirname, '..')
};

const displayFiles = (err, files) => {
  if (err) {
    throw err;
  }

  console.log(files);
};

glob('package*', options, displayFiles);          // <1>
glob('index.{adoc,js*}', options, displayFiles);  // <2>
glob('index.[as]*', options, displayFiles);       // <3>
glob('index.!(js)', options, displayFiles);       // <4>
glob('examples/**/*.js', options, displayFiles);  // <5>
