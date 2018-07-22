'use strict';

const assert = require('assert').strict;
const configRoute = require('../src/routes/books.js');
const database = require('../src/database.js');
const sinon = require('sinon');
const {response} = require('express');
const loadFixtures = require('./fixtures.js');      // <1>

database(':memory:')
  .then(db => loadFixtures(db))                     // <2>
  .then(db => {
    const route = configRoute(db);
    const sendFake = sinon.stub(response, 'send');

    route({params: {id: 1}}, response).then(() => {
      assert.ok(sendFake.calledWith(sinon.match({   // <3>
        'title': 'Design Systems'                   // <4>
      })));
    })
  });
