'use strict';

/* global describe, it */

const assert = require('assert');

describe('Date', () => {
  it('be greater than my birthday date', () => {
    assert(Date.now() > new Date('2013-03-24').getTime());
  });
});
