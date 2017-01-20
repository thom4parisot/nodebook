'use strict';

const CliTable = require('cli-table');
const pkg = require('../../package.json');
const table = new CliTable({
  head: ['Module', 'Version']
});

const modules = Object.keys(pkg.dependencies).map((moduleName) => {
  return [moduleName, pkg.dependencies[moduleName]];
});

table.push(...modules);

console.log(table.toString());
