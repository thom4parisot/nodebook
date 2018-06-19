'use strict';

const {table} = require('table');
const {bold, green:g} = require('chalk');

const data = [
  [bold('Titre'), bold('ISBN')],      // <1>
  [g('Node.js'), '978-2212139938'],   // <2>
  [g('Sass pour les web designers'), '978-2212141474'],
  [g('Design Systems'), '978-3945749586'],
];

console.log(table(data));             // <3>
