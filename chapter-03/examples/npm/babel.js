'use strict';

const { dependencies } = require('../../package.json');
let pattern = /^passport/;

for (let moduleName in dependencies) {
  if (pattern.test(moduleName)) {
    console.log(`${moduleName}@${dependencies[moduleName]}`);
  }
}
