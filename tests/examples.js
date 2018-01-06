'use strict';

const test = require('blue-tape');
const spawn = require('tape-spawn');
const {dirname} = require('path');
const glob = require('glob');

const chapters = glob.sync('*/examples');
const examples = glob.sync('*/examples/*.js');

test('chapters', t => {
  t.plan(1);

  t.equal(chapters.length, 10);
});

examples.forEach(example => {
  test(example, {timeout: 1000}, t => {
    t.plan(1);

    const p = spawn(t, `node ${example}`, {
      // cwd: dirname(example)
    });

    p.timeout(500);
    p.exitCode(0);

    return p.end();
  });
});
