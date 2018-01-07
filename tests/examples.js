'use strict';

const test = require('blue-tape');
const spawn = require('tape-spawn');
const glob = require('glob');

const EXTRAS = require('./examples-config.json');

const examples = glob.sync('*/examples/*.js');
const serverSide = (file) => /chapter-09/.test(file) === false;

const DEFAULT_CONFIG = {
  exitCode: 0,
  timeout: 5000,
};

examples.filter(serverSide).forEach(FILE => {
  test(FILE, {timeout: 1000}, t => {
    const {[FILE]:config=DEFAULT_CONFIG} = EXTRAS;

    if (config.skip) {
      t.skip();
      return t.end();
    }

    const p = spawn(t, `node ${FILE}`);

    if (config.timeout) {
      t.timeoutAfter(config.timeout * 2)
      p.timeout(config.timeout);
    }

    p.exitCode(config.exitCode);

    if (config.stderr) {
      p.stderr.match(new RegExp(config.stderr));
    }
    else {
      p.stderr.match(/^$/);
    }

    return p.end();
  });
});
