'use strict';

var CliTable = require('cli-table');
var pkg = require('../../package.json');
var table = new CliTable({
  head: ['Module', 'Version']
});

var modules = Object.keys(pkg.dependencies).map(function(moduleName){
  return [moduleName, pkg.dependencies[moduleName]];
});

table.push.apply(table, modules);

console.log(table.toString());