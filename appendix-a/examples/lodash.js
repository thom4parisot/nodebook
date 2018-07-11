'use strict';

const { intersection, first } = require('lodash');
const DC = ['Batman', 'Brainiac', 'Thor'];
const Marvel = ['Spiderman', 'Thor'];

const result = first(intersection(DC, Marvel));
console.log(result);  // <1>
