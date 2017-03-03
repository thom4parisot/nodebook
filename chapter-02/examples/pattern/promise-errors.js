'use strict';

const pify = require('pify');
const messageAbbr = pify(require('../message-abbr'));

const logErr = (err) => console.error(err);
const logFinalErr = (err) => console.error('Erreur dans .catch() final', err);
const logData = (data) => console.log(data);

messageAbbr('good morning Bordeaux!')
  .then(logData)
  .catch(logErr)                                           // <1>
  .then(() => { throw Error('Erreur volontaire') }, logErr)// <2>
  .catch(logFinalErr);                                     // <3>

  messageAbbr(null)
    .then(logData, logErr);     // <4>

  messageAbbr(null)
    .then(logData);             // <5>
