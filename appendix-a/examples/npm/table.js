'use strict';

const {table} = require('table');
const chalk = require('chalk');

const data = Object.entries(process.versions);
const header = [
  chalk.bold.white('Software'),
  chalk.bold.white('Version')
];

console.log(table([ header, ...data ]));
