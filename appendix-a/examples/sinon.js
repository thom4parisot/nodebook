'use strict';

const test = require('tape');
const sinon = require('sinon');

test('Date', (t) => {
  const d = Date;
  const dateTime = new Date('1983-03-24').getTime();
  const stub = sinon.stub(d, 'now');    // <1>
  stub.returns(9999999999999);          // <2>

  d.now();
  t.equal(stub.calledOnce, true);       // <3>
  t.ok(stub.returnValues[0] > dateTime);
  t.end();
});
