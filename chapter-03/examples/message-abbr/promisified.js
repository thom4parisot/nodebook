'use strict';

const uppercaseAsync = (message) => {
  return new Promise((resolve) => {
    resolve(message.toLocaleUpperCase ? message.toLocaleUpperCase() : message)
  });
}

const splitWordsAsync = (message) => {
  return new Promise((resolve, reject) => {
    if (typeof message !== 'string'){
      reject(new TypeError('message is not a String'));
    }
    else {
      resolve(message.split(' '));
    }
  });
}

const abbreviateAsync = (words) => {
  return new Promise((resolve, reject) => {
    try {
      const abbr = words.reduce((abbr, word) => abbr + word[0], '');

      resolve(abbr);
    }
    catch (err){
      reject(err);
    }
  });
}

const messageAbbr = (message) => {
  return new Promise((resolve, reject) => {
    return uppercaseAsync(message)
      .then(splitWordsAsync)
      .then(abbreviateAsync)
      .then(resolve)
      .catch(reject);
  });
};

module.exports = messageAbbr;
