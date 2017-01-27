'use strict';

const pify = require('pify');
const messageAbbrAsync = require('../message-abbr');
const messageAbbr = pify(messageAbbrAsync);    // <1>

const logErr = (err) => console.error(err);
const logData = (data) => console.log(data);

messageAbbr('good morning Bordeaux!')
  .then(logData, logErr);  // <3>
