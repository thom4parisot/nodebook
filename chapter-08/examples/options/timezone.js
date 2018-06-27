'use strict';

const parse = require('minimist');
const args = parse(process.argv.slice(2));
const [timezone] = args._;                          // <1>

if (!timezone) {
  throw Error('Merci d\'indiquer un fuseau horaire :-)');
}

const options = {
  timeZone: timezone,
  hour: 'numeric', minute: 'numeric', hour12: false // <2>
};

const text = new Date().toLocaleDateString('fr-FR', options);
console.log(text);                                  // <3>
