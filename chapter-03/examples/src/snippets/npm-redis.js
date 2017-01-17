'use strict';

const client = require('redis').createClient();
const Promise = require('bluebird');
const uuid = require('uuid').v4;

Promise.promisifyAll(client);

Promise.all([
  client.hset(`book:${uuid()}`, 'title', 'Node.js'),
  client.hset(`book:${uuid()}`, 'title', 'CSS maintenables'),
  client.hset(`book:${uuid()}`, 'title', 'Open Sky')
])
.then(() => {
  console.log('Enregistrements créés.');
  client.end();
});
