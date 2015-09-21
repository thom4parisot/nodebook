'use strict';

var Promise = require('es6-promise').Promise;

function uppercaseAsync(message){
  return new Promise(function(resolve){
    resolve(message.toLocaleUpperCase ? message.toLocaleUpperCase() : message)
  });
}

function splitWordsAsync(message){
  return new Promise(function(resolve, reject){
    if (typeof message !== 'string'){
      reject(new TypeError('message is not a String'));
    }
    else {
      resolve(message.split(' '));
    }
  });
}

function abbreviateAsync(words){
  return new Promise(function(resolve, reject){
    try {
      var abbr = words.reduce(function(abbr, word){
        return abbr + word[0];
      }, '');

      resolve(abbr);
    }
    catch (err){
      reject(err);
    }
  });
}

module.exports = function messageAbbr(message){
  return new Promise(function(resolve, reject){
    return uppercaseAsync(message)
      .then(uppercaseAsync)
      .then(splitWordsAsync)
      .then(abbreviateAsync)
      .then(resolve)
      .catch(reject);
  });
};
