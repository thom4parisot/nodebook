'use strict';

const parse = require('minimist');
const args = parse(process.argv.slice(2));
const timezones = args._;

const output = timezones.map(timeZone => {              // <1>
  const date = new Date().toLocaleDateString('fr-FR', {
    timeZone,
    hour: 'numeric', minute: 'numeric', hour12: false
  });
  return `${timeZone} : ${date}`;                       // <2>
});

console.log(output.join('\n'));                         // <3>
