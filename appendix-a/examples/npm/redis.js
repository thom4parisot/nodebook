'use strict';

const client = require('redis').createClient();
const hset = require('util').promisify(client.hset);
const uuid = require('uuid').v4;

Promise.all([
  hset(`book:${uuid()}`, 'title', 'Node.js'),
  hset(`book:${uuid()}`, 'title', 'CSS maintenables'),
  hset(`book:${uuid()}`, 'title', 'Open Sky')
])
.then(() => {
  console.log('Enregistrements créés.');
  client.end();
});
