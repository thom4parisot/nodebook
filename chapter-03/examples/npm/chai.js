'use strict';

// ./node_modules/.bin/mocha examples/npm/chai.js

/* global describe, it */

const {expect} = require('chai');
const messageAbbr = require('../message-abbr');

describe('Date assertion sandbox', () => {
  it('should state than now is greater than my birth date', () => {
    expect(new Date()).to.be.above(new Date('1983/03/24'));
  });
});

describe('messageAbbr', () => {
  it('should return a capitalised abbr', done => {
    messageAbbr('hello world', (err, abbr) => {
      expect(err).to.be.null;
      expect(abbr).to.equal('HW');
      done();
    });
  });

  it('should populate the callback error argument if it fails', () => {
    messageAbbr(null, err => {
      expect(err).to.be.an(Error);
    });
  });
});
