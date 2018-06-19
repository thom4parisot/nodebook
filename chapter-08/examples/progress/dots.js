'use strict';

let counter = 0;

setInterval(() => {
  counter++;
  const progress = '•'.repeat(counter).padEnd(3, '·');
  const sun = counter === 3 ? '☀️' : '';
  const cmd = counter !== 1 ? '\x1B[1F' : '';             // <1>

  console.log(`${cmd}(${progress}) Un-deux-trois ${sun}`);// <2>

  if (counter === 3) process.exit(0);
}, 1000);
