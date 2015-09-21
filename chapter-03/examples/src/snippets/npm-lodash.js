'use strict';

var _ = require('lodash');

var charSplit = function(char, string) {
  return string.split(char);
};

var mapStringFn = function(fn, array) {
  return array.map(Function.prototype.call, String.prototype[fn]);
};

var mapUppercase = _.partial(mapStringFn, 'toLocaleUpperCase');
var mapTrim = _.partial(mapStringFn, 'trim');
var commaSplit = _.partial(charSplit, ',');

var splitAndUppercase = _.compose(mapUppercase, mapTrim, commaSplit);

console.log(splitAndUppercase(' a , b , c , d ')); // <1>