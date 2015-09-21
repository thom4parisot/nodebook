'use strict';

var test = require('tape');

test('Date test', function(t){
  t.plan(1);

  t.ok(Date.now() > new Date('2013-03-24').getTime());
});