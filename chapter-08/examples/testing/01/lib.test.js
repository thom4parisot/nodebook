'use strict';

const test = require('tape');
const getTime = require('./lib.js');

test('getTime', t => {                          // <1>
  t.plan(2);                                    // <2>

  t.ok(getTime('Europe/Paris'));                // <3>
  t.throws(() => getTime(), /fuseau horaire/);  // <4>
});
