'use strict';

const {resolve} = require('path');

const base_dir = __dirname;
const bad_user_input = '/etc/passwd';

const resolved = resolve(base_dir, bad_user_input);
console.log(resolved);                  // <1>

if (resolved.indexOf(base_dir) !== 0) { // <2>
  console.error(`${resolved} doit commencer par ${base_dir}`);
}
