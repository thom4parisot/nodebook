'use strict';

const async = require('async');

const mapStringFn = (fn, array) => {
  return array.map(Function.prototype.call, String.prototype[fn]);
};

async.waterfall([
  (done) => done(null, ' a , b , c , d '),
  (string, done) => done(null, string.split(',')),
  (array, done) => done(null, mapStringFn('trim', array)),
  (array, done) => done(null, mapStringFn('toLocaleUpperCase', array)),
], (err, result) => {
  if (err) {
    return console.error(err);
  }

  console.log(result); // <1>
});
