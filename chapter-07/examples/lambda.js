'use strict';

const lambda = require('apex.js');
const {random} = require('pokemon');

module.exports = lambda(event => random()); // <1>
