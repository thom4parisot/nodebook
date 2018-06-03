'use strict';

const app = require('./app.js');
const assert = require('assert');

describe('app.js', () => {
  it('prints a cow as a response', () => {
    const end = (text) => assert(text);
    app({}, {end});
  });
});
