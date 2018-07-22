'use strict';

const assert = require('assert').strict;
const configRoute = require('../src/routes/books.js');
const database = require('../src/database.js');
const sinon = require('sinon');
const {response} = require('express');
const loadFixtures = require('./fixtures.js');
const {describe, before, afterEach} = require('mocha'); // <1>
const {it:test} = require('mocha');                     // <2>

describe('routes/books.js', () => {                   // <1>
  let db, route;

  before(async () => {                                // <2>
    db = await database(':memory:');
    await loadFixtures(db);
    route = configRoute(db);
  });

  afterEach(() => sinon.restore());                   // <3>

  test('statut 200', () => {                          // <2>
    const sendFake = sinon.stub(response, 'send');

    return route({params: {id: 1}}, response).then(() => {
      assert.ok(sendFake.calledWith(sinon.match({
        'title': 'Design Systems'
      })));
    });
  });

  test('statut 404', () => {                          // <3>
    const sendFake = sinon.stub(response, 'send');
    const statusSpy = sinon.spy(response, 'status');

    return route({params: {id: 4}}, response).then(() => {
      assert.ok(statusSpy.calledWith(404));
      assert.ok(sendFake.calledWith('Livre inconnu'));
    });
  });
});
