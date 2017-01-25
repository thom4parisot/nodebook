'use strict';

const glob = require('glob');
const join = require('path').join;

const options = {
  cwd: join(__dirname, '..', '..'),
  ignore: 'node_modules/**'
};

glob('**/cli*.{sh,js}', options, (err, files) => {
  if (err) {
    return console.error(err);
  }

   console.log(files); // <1>
});
