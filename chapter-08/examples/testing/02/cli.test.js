'use strict';

const test = require('tape');
const spawn = require('tape-spawn');
const opts = {cwd: __dirname};

test('cli w/o arg', t => {
  const proc = spawn(t, './cli.js', opts);  // <1>
  proc.exitCode(1);                         // <2>
  proc.end();
});

test('cli w/ arg', t => {
  const proc = spawn(t, './cli.js Europe/Paris', opts);
  proc.exitCode(0);                         
  proc.stdout.match(/\d{2}:\d{2}/);         // <3>
  proc.end();
});
