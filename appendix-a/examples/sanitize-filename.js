'use strict';

const sanitize = require('sanitize-filename');

console.log(sanitize('aucun-problème.txt'));  // <1>
console.log(sanitize('../../.ssh/id_rsa'));   // <2>
