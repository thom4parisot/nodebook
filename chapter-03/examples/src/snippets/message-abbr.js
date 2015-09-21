'use strict';

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

module.exports = function messageAbbr(message, callback){
  uppercaseAsync(message, function(err, message){
    if (err) {
      return callback(err);
    }

    splitWordsAsync(message, function(err, words){
      if (err) {
        return callback(err);
      }

      abbreviateAsync(words, callback);
    });
  });
};
