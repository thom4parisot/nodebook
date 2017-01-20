'use strict';

const waterfall = require('async').waterfall;
const EventEmitter = require('events').EventEmitter;

const uppercaseAsync = (message, callback) => {
  process.nextTick(() => {
    callback(null, message.toLocaleUpperCase ? message.toLocaleUpperCase() : message);
  });
}

const splitWordsAsync = (message, callback) => {
  process.nextTick(() => {
    if (typeof message !== 'string'){
      callback(new TypeError('message is not a String'));
    }
    else {
      callback(null, message.split(' '));
    }
  });
}

const abbreviateAsync = (words, callback) => {
  process.nextTick(() => {
    try {
      const abbr = words.reduce((abbr, word) => abbr + word[0], '');

      callback(null, abbr);
    }
    catch (err){
      callback(err);
    }
  });
}

const messageAbbr = (message){
  const emitter = new EventEmitter();

  waterfall([
    (done) => done(null, message),
    uppercaseAsync,
    splitWordsAsync,
    abbreviateAsync
  ], (err, abbr) => {
    if (err) {
      return emitter.emit('error', err);
    }

    emitter.emit('data', abbr);
  });

  return emitter;
};

module.exports = messageAbbr;
