'use strict';

const client = require('redis').createClient();
const hset = require('util').promisify(client.hset);

Promise.all([
  hset('book:node', 'title', 'Node.js'),
  hset('book:css', 'title', 'CSS maintenables'),
  hset('book:opensky', 'title', 'Open Sky')
])
.then(() => {
  console.log('Enregistrements créés.');
  client.end();
});
