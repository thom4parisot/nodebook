'use strict';

const messageAbbr = require('../message-abbr');

const printAbbr = (err, abbr) => err ? console.error(err) : console.log(abbr);

messageAbbr('good morning england!', printAbbr);        // <1>
messageAbbr(['good', 'morning', 'london!'], printAbbr); // <2>

setTimeout(() => {
  try {
    messageAbbr(null, printAbbr); // <3>
  }
  catch (e){
    console.error('null is not a string');
  }
}, 10);
