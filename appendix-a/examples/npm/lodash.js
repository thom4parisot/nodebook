'use strict';

const { partial, compose } = require('lodash');

const charSplit = (char, string) => string.split(char);
const mapStringFn = (fn, array) => {
  return array.map(Function.prototype.call, String.prototype[fn]);
};

const mapUppercase = partial(mapStringFn, 'toLocaleUpperCase');
const mapTrim = partial(mapStringFn, 'trim');
const commaSplit = partial(charSplit, ',');

const splitAndUppercase = compose(mapUppercase, mapTrim, commaSplit);

console.log(splitAndUppercase(' a , b , c , d ')); // <1>
