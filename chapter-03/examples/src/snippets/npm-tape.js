'use strict';

const test = require('tape');

test('Date test', (t) => {
  t.plan(1);

  t.ok(Date.now() > new Date('2013-03-24').getTime());
});
