'use strict';

const debug = require('debug');
const log = debug('app');                     // <1>
const logInterval = debug('app:timer');       // <2>

log('fromages %o', ['livarot', 'chaource']);  // <3>

setTimeout(() => {
  logInterval('now %d', Date.now());          // <4>
}, 1000);
