'use strict';

const uppercaseAsync = (message, callback) => {
  process.nextTick(() => {
    callback(null, message.toLocaleUpperCase ? message.toLocaleUpperCase() : message);
  });
}

const splitWordsAsync = (message, callback) => {
  process.nextTick(() => {
    if (typeof message !== 'string'){
      return callback(new TypeError('message is not a String'));
    }

    return callback(null, message.split(' '));
  });
}

const abbreviateAsync = (words, callback) => {
  process.nextTick(() => {
    try {
      const abbr = words.reduce((abbr, word) => abbr + word[0], '');

      return callback(null, abbr);
    }
    catch (err){
      return callback(err);
    }
  });
}

const messageAbbr = (message, callback) => {
  uppercaseAsync(message, (err, message) => {
    if (err) {
      return callback(err);
    }

    splitWordsAsync(message, (err, words) => {
      if (err) {
        return callback(err);
      }

      abbreviateAsync(words, callback);
    });
  });
};

module.exports = messageAbbr;
