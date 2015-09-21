'use strict';

var assert = require('assert');
var sinon = require('sinon');

describe('Date', function(){
  var d = Date, stub;

  beforeEach(function(){
    stub = sinon.stub(d, 'now');
  });

  afterEach(function(){
    stub.restore();
  });

  it('should be greater than my birthday date', function(){
    stub.returns(9999999999999);

    d.now();

    assert(stub.calledOnce);
    assert(stub.returnValues[0] > new Date('2013-03-24').getTime());
  });

  it('should fail if smaller than my birthday date', function(){
    stub.returns(100);

    d.now();

    assert.ifError(stub.returnValues[0] > new Date('2013-03-24').getTime());
  });
});