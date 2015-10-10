'use strict';

let glob = require('glob');
let join = require('path').join;

const options = {
  cwd: join(__dirname, '..', '..'),
  ignore: 'node_modules/**'
};

glob('**/cli*.{js,json}', options, function(err, files){
  console.log(files); // <1>
});
