'use strict';

const {expect} = require('chai');

expect([1, 2]).to.be.an('array');             // <1>
expect([1, 2]).to.deep.equal([1, 2]);         // <2>
expect({}).to.be.an('object').and.to.be.empty;// <3>
