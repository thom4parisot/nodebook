'use strict';

const assert = require('assert').strict;
const configRoute = require('../src/routes/books.js');
const database = require('../src/database.js');
const sinon = require('sinon');
const {response} = require('express');
const loadFixtures = require('./fixtures.js');

database(':memory:')
  .then(db => loadFixtures(db))
  .then(db => {
    const route = configRoute(db);
    const sendFake = sinon.stub(response, 'send');
    const statusSpy = sinon.spy(response, 'status');  // <1>

    route({params: {id: 1}}, response).then(() => {
      assert.ok(sendFake.called);
    });

    route({params: {id: 4}}, response).then(() => {   // <2>
      assert.ok(statusSpy.calledWith(404));           // <3>
      assert.ok(sendFake.calledWith('Livre inconnu'));// <4>
    });
  });
