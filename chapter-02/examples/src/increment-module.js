'use strict';

let counter = 0;

console.log(module.id);

module.exports = {
  run: () => counter++,
};
