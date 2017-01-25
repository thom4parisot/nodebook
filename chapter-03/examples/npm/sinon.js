'use strict';

const test = require('tape');
const sinon = require('sinon');

test('Date', (t) => {
  t.plan(3);

  const d = Date;
  const stub = sinon.stub(d, 'now');
  stub.returns(9999999999999);

  d.now();
  t.equal(stub.calledOnce, true);
  t.equal(stub.returnValues[0] > new Date('1983-03-24').getTime(), true);

  stub.returns(100);
  d.now();

  t.equal(stub.returnValues[0] > new Date('1983-03-24').getTime(), true);
});
