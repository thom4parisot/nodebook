'use strict';

const test = require('blue-tape');
const {extname} = require('path');
const spawn = require('tape-spawn');
const glob = require('glob');

const EXTRAS = require('./examples-config.js');

const examples = glob.sync('*/examples/**/*.{mjs,js}');
const serverSide = (file) => /chapter-09/.test(file) === false;

const DEFAULT_CONFIG = {
  exitCode: 0,
  timeout: 5000,
};

examples.filter(serverSide).forEach(FILE => {
  test(FILE, {timeout: 1000}, t => {
    const {[FILE]:config=DEFAULT_CONFIG} = EXTRAS;
    let nodeArgs = '';

    if (config.skip) {
      t.skip();
      return t.end();
    }

    // enable ECMAScript Module experimental support
    if (extname(FILE) === '.mjs') {
      nodeArgs += '--experimental-modules'
    }

    const p = spawn(t, `node ${nodeArgs} ${FILE}`);
    p.exitCode(config.exitCode, `exit code = ${config.exitCode}`);

    if (config.timeout) {
      t.timeoutAfter(config.timeout * 2)
      p.timeout(config.timeout);
    }

    if (config.stdin) {
      p.stdin.end(config.stdin);
    }

    if (config.stdout) {
      p.stdout.match(config.stdout);
    }

    config.stderr
      ? p.stderr.match(new RegExp(config.stderr))
      : p.stderr.match(/^$/, 'stderrr is empty');

    return p.end();
  });
});
