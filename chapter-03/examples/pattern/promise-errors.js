'use strict';

const messageAbbr = require('../message-abbr/promisified');

const logErr = (err) => console.error(err);
const logData = (data) => console.log(data);

messageAbbr(['good', 'morning', 'London!']).then(logData, logErr); // <1>
messageAbbr(null).then(logData, logErr); // <2>
messageAbbr('good morning Bordeaux!')
  .then(logData)
  .then(() => { throw Error('Erreur volontaire') }, logErr) // <3>
  .catch(err => logErr(err + ' dans .catch() final'));      // <4>
