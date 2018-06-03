'use strict';

const [,, ...args] = process.argv;

if (args.length) {
  console.log(args);
}
else {
  console.log('Rien à signaler.');
}
