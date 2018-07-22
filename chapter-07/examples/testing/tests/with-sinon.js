'use strict';

const assert = require('assert').strict;
const configRoute = require('../src/routes/books.js');
const database = require('../src/database.js');
const sinon = require('sinon');
const {response} = require('express');            // <1>

database(':memory:').then(db => {
  const route = configRoute(db);
  const sendFake = sinon.stub(response, 'send');  // <2>

  return route({params: {id: 1}}, response).then(() => {
    assert.ok(sendFake.called);                   // <3>
  })
})
.catch(error => {
  console.error(error.message);
  process.exit(1);
});
