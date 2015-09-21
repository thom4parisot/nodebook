'use strict';

var waterfall = require('async').waterfall;
var EventEmitter = require('events').EventEmitter;

function uppercaseAsync(message, callback){
  process.nextTick(function(){
    callback(null, message.toLocaleUpperCase ? message.toLocaleUpperCase() : message);
  });
}

function splitWordsAsync(message, callback){
  process.nextTick(function(){
    if (typeof message !== 'string'){
      callback(new TypeError('message is not a String'));
    }
    else {
      callback(null, message.split(' '));
    }
  });
}

function abbreviateAsync(words, callback){
  process.nextTick(function(){
    try {
      var abbr = words.reduce(function(abbr, word){
        return abbr + word[0];
      }, '');

      callback(null, abbr);
    }
    catch (err){
      callback(err);
    }
  });
}

module.exports = function messageAbbr(message){
  var emitter = new EventEmitter();

  waterfall([
    function(done){
      done(null, message);
    },
    uppercaseAsync,
    splitWordsAsync,
    abbreviateAsync
  ], function(err, abbr){
    if (err) {
      return emitter.emit('error', err);
    }

    emitter.emit('data', abbr);
  });

  return emitter;
};
