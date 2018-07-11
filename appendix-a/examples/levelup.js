'use strict';

const levelup = require('levelup');
const memdown = require('memdown');
const encode = require('encoding-down');

const db = levelup(encode(memdown(),          // <1>
  { valueEncoding: 'json' }
));

Promise.all([
  db.put('node', {title: 'Node.js'}),
  db.put('css', {title: 'CSS maintenables'}),
  db.put('opensky', {title: 'Open Sky'}),
])
.then(() => db.get('node'))                   // <2>
.then(result => {
  console.log(result);                        // <3>
});
