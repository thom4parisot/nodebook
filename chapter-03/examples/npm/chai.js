'use strict';

const { expect } = require('chai');

const expectedDate = new Date('1983-03-24').getTime();

expect(Date.now()).to.be.greaterThan(expectedDate);
