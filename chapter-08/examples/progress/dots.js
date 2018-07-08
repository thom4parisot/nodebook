'use strict';

let counter = 0;

const display = (count) => {
  const dots = '•'.repeat(count).padEnd(3, '·');
  const sun = count === 3 ? '☀️' : '';
  const cmd = counter !== 1 ? '\x1B[1F' : '';           // <1>

  console.log(`${cmd}(${dots}) Un-deux-trois ${sun}`);  // <2>
}

setInterval(() => {
  counter++;
  display(counter);

  if (counter === 3) process.exit(0);
}, 1000);
