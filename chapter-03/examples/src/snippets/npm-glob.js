'use strict';

const glob = require('glob');
const join = require('path').join;

const options = {
  cwd: join(__dirname, '..', '..'),
  ignore: 'node_modules/**'
};

glob('**/cli*.{js,json}', options, (err, files) => console.log(files)); // <1>
