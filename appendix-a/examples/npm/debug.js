'use strict';

const debug = require('debug')('app:ch06');             // <1>
const debugInterval = require('debug')('app:interval'); // <2>

let count = 0;
debug('fromages %o', ['livarot', 'chaource']);          // <3>

setInterval(() => {
  count++;
  debugInterval('count %d', count);                     // <4>

  if (count === 5) {
    process.exit(0);
  }
}, 1000);
