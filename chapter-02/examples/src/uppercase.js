'use strict';

process.stdin.on('data', (buffer) => {
  process.stdout.write(buffer.toString().toUpperCase() + '\n');
});
