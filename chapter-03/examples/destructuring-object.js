'use strict';

/* eslint-disable no-sparse-arrays */

const { join } = require('path');  // <1>
const config = {
  debug: true,
};

const { debug: configDebug } = config;
const { isProd, name = 'Demo' } = config;
const logConfigDebug = ({ debug }) => {           // <2>
  console.log(debug);
};

console.log(join('folder', 'filename.txt'));      // <3>
console.log(configDebug); // <4>
console.log(isProd);      // <5>
console.log(name);        // <6>
logConfigDebug(config, 'zero', 'un', 'deux');     // <7>
