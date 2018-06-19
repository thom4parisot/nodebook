'use strict';

const check = require('update-check');
const pkg = { name: 'nodebook', version: '0.8.0' }; // <1>

check(pkg)                              // <2>
  .then(update => console.log(update)); // <3>
