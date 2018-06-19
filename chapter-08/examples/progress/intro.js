'use strict';

let counter = 0;

const display = (count) => {
  const progress = '•'.repeat(count).padEnd(3, '·');  // <2>
  const sun = count === 3 ? '☀️' : '';

  console.log(`(${progress}) Un-deux-trois ${sun}`);  // <3>
}

setInterval(() => {
  counter++;
  display(counter);                   // <1>

  if (counter === 3) process.exit(0);
}, 1000);
