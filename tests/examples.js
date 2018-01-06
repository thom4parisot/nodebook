'use strict';

const test = require('blue-tape');
const spawn = require('tape-spawn');
const glob = require('glob');

const chapters = glob.sync('*/examples');
const examples = glob.sync('*/examples/*.js');
const serverSide = (file) => /chapter-09/.test(file) === false;

const EXTRAS = {
  'chapter-04/examples/uppercase.js': {},
};

test('chapters', t => {
  t.plan(1);

  t.equal(chapters.length, 10);
});

examples.filter(serverSide).forEach(FILE => {
  test(FILE, {timeout: 5000}, t => {
    if (FILE in EXTRAS) {
      t.skip();
      return t.end();
    }

    const p = spawn(t, `node ${FILE}`);

    p.timeout(2000);
    p.succeeds();

    return p.end();
  });
});
