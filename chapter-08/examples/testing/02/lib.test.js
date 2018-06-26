'use strict';

const test = require('tape');
const getTime = require('./lib.js');

test('getTime', t => {
  t.plan(2);

  getTime('Europe/Paris').then((time) => t.ok(time));
  getTime().catch(error => {
    t.ok(error.message.match(/fuseau horaire/));
  });
});
