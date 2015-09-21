'use strict';

var pkg = require('../../package.json');
var pattern = /^passport/;

for (let moduleName in pkg.dependencies) {
  if (pattern.test(moduleName)) {
    console.log(`${moduleName}@${pkg.dependencies[moduleName]}`);
  }
}