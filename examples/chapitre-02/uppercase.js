'use strict';

process.stdin.on('data', function(buffer){
  process.stdout.write(buffer.toString().toUpperCase() + '\n');
});