'use strict';

/* eslint-disable no-sparse-arrays */

const path = require('path');
console.log(path.join('folder', 'filename.txt'));      // <3>

const { join } = require('path');  // <1>
console.log(join('folder', 'filename.txt'));      // <3>

//

const config = {
  debug: true,
};

const { debug: configDebug } = config;
console.log(configDebug); // <4>

//

const { isProd, name = 'Demo' } = config;
console.log(isProd);      // <5>
console.log(name);        // <6>

//

const logConfigDebug = ({ debug }) => {           // <2>
  console.log(debug);
};

logConfigDebug(config);                   // <7>
