'use strict';

const assert = require('assert');
const sinon = require('sinon');

describe('Date', () => {
  const d = Date;
  let stub;

  beforeEach(() => {
    stub = sinon.stub(d, 'now');
  });

  afterEach(() => stub.restore());

  it('should be greater than my birthday date', () => {
    stub.returns(9999999999999);

    d.now();

    assert(stub.calledOnce);
    assert(stub.returnValues[0] > new Date('2013-03-24').getTime());
  });

  it('should fail if smaller than my birthday date', () => {
    stub.returns(100);

    d.now();

    assert.ifError(stub.returnValues[0] > new Date('2013-03-24').getTime());
  });
});
