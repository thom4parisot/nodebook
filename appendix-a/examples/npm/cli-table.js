'use strict';

const {table} = require('table');
const chalk = require('chalk');
const env = Object.entries(process.env);

const data = [[chalk.bold.white('Key'), chalk.bold.white('Value')]].concat(env);
const config = {
  columns: {
    1: { width: 60 }
  }
};

console.log(table(data, config));
