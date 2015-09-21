'use strict';

var async = require('async');

var mapStringFn = function(fn, array) {
  return array.map(Function.prototype.call, String.prototype[fn]);
};

async.waterfall([
  function(done){
    done(null, ' a , b , c , d ')
  },
  function commaSplit(string, done){
    done(null, string.split(','))
  },
  function mapTrip(array, done){
    done(null, mapStringFn('trim', array));
  },
  function mapUppercase(array, done){
    done(null, mapStringFn('toLocaleUpperCase', array));
  }
], function(err, result){
  console.log(result); // <1>
});