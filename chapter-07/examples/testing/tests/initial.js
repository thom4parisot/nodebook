'use strict';

const assert = require('assert').strict;
const configRoute = require('../src/routes/books.js');

assert.deepEqual(typeof configRoute, 'function'); // <1>

/*
const db = require('../src/database.js');         // <2>
const route = configRoute(db);
assert.deepEqual(route(request, response));
*/
