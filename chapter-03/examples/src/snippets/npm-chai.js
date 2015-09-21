'use strict';

var expect = require('chai').expect;

describe('Date', function(t){
  it('be greater than my birthday date', function(){
    expect(Date.now()).to.be.greaterThan(new Date('2013-03-24').getTime());
  });
});