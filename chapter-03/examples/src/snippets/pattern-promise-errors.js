'use strict';

var messageAbbr = require('./message-abbr-promisified');

messageAbbr(['good', 'morning', 'london!']).then(logData, logErr); // <1>
messageAbbr(null).then(logData, logErr); // <2>

function logErr(err){
  console.error(err);
}

function logData(data){
  console.log(data);
}