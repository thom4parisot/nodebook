'use strict';

/* global describe, it */

const { expect } = require('chai');

describe('Date', () => {
  it('be greater than my birthday date', () => {
    expect(Date.now()).to.be.greaterThan(new Date('2013-03-24').getTime());
  });
});
