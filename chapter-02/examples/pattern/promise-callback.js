'use strict';

const messageAbbrAsync = require('../message-abbr');

const messageAbbr = (text) => {
  return new Promise((resolve, reject) => {
    messageAbbrAsync(text, (err, abbr) => {
      if (err) {
        return reject(err);
      }

      resolve(abbr);
    })
  });
};

const logErr = (err) => console.error(err);
const logData = (data) => console.log(data);

messageAbbr('good morning Bordeaux!')
  .then(logData, logErr);  // <3>
