'use strict';

const _ = require('lodash');

const charSplit = (char, string) => string.split(char);
const mapStringFn = (fn, array) {
  return array.map(Function.prototype.call, String.prototype[fn]);
};

const mapUppercase = _.partial(mapStringFn, 'toLocaleUpperCase');
const mapTrim = _.partial(mapStringFn, 'trim');
const commaSplit = _.partial(charSplit, ',');

const splitAndUppercase = _.compose(mapUppercase, mapTrim, commaSplit);

console.log(splitAndUppercase(' a , b , c , d ')); // <1>
