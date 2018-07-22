'use strict';

const assert = require('assert').strict;
const configRoute = require('../src/routes/books.js');
const database = require('../src/database.js');

// assert.deepEqual(typeof configRoute, 'function');// <1>

database(':memory:').then(db => {                   // <2>
  const route = configRoute(db);                    // <3>
  assert.deepEqual(typeof route, 'function');       // <4>
  /*
  assert.deepEqual(route(request, response));       // <5>
  */
});
