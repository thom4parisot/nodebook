'use strict';

var client = require('redis').createClient();
var Promise = require("bluebird");
var uuid = require('uuid').v4;

Promise.promisifyAll(client);

Promise.all([
  client.hset('book:' + uuid(), 'title', 'Node.js'),
  client.hset('book:' + uuid(), 'title', 'CSS maintenables'),
  client.hset('book:' + uuid(), 'title', 'Open Sky')
])
.then(function(){
  console.log('Enregistrements créés.');
  client.end();
});
