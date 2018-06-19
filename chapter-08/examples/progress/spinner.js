'use strict';

const ora = require('ora');
let counter = 0;
const progress = ora().start('Un-deux-trois…'); // <1>

setInterval(() => {
  counter++;
  if (counter === 3) {
    progress.succeed('Un-deux-trois… Soleil !');// <2>
    process.exit(0);
  }
}, 1000);
