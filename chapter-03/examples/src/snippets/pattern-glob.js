'use strict';

const glob = require('glob');
const options = {
  cwd: __dirname
};

const displayFiles = (err, files) => {
  if (err) {
    throw err;
  }

  console.log(files);
};

glob('template.*', options, displayFiles);        // <1>
glob('template.{hbs,ej*}', options, displayFiles);// <2>
glob('template.[ej]*', options, displayFiles);    // <3>
glob('template.!(jade)', options, displayFiles);  // <4>
glob('src/**/*.css', displayFiles);               // <5>
