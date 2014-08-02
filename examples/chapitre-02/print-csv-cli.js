#!/usr/bin/env node

'use strict';

var join = require('path').join;
var chalk = require('chalk');
var filepath = join(__dirname, 'data', 'books.csv');

var titleColor = chalk.bgGreen.bold;
var authorColor = chalk.blue.bold;

require('./print-csv-module')(filepath, function printRow(row){
  console.log('%s a été écrit par %s', titleColor(row['Titre']), authorColor(row['Auteur(s)']));
});