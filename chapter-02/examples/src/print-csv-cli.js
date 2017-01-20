#!/usr/bin/env node

'use strict';

const { join } = require('path');
const chalk = require('chalk');
const printCSV = require('./print-csv-module');
const filepath = join(__dirname, 'data', 'books.csv');

const titleColor = chalk.bgGreen.bold;
const authorColor = chalk.blue.bold;

printCSV(filepath, (row) => {
  console.log('%s a été écrit par %s', titleColor(row['Titre']), authorColor(row['Auteur(s)']));
});
