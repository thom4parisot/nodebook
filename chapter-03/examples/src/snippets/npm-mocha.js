'use strict';

var assert = require('assert');

describe('Date', function(){
  it('be greater than my birthday date', function(){
    assert(Date.now() > new Date('2013-03-24').getTime());
  });
});