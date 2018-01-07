'use strict';

const {promisify} = require('util');
const messageAbbrAsync = require('./message-abbr');
const messageAbbr = promisify(messageAbbrAsync);    // <1>

const logErr = (err) => console.error(err);
const logData = (data) => console.log(data);

messageAbbr('good morning Bordeaux!')
  .then(logData, logErr);  // <3>
