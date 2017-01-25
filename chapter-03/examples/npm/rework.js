'use strict';

const rework = require('rework');
const fs = require('fs');
const { join } = require('path');

const colors = require('rework-plugin-colors');
const whitespace = require('css-whitespace');
const vars = require('rework-vars');
const math = require('rework-math');

fs.readFile(join(__dirname, '..', 'stylesheet.css'), (err, binaryContent) => {
  if (err) {
    // ...
  }

  const textContent = whitespace(String(binaryContent));
  const r = rework(textContent, { source: 'stylesheet.css' })
    .use(vars())
    .use(math())
    .use(colors());

  console.log(r.toString());
});
