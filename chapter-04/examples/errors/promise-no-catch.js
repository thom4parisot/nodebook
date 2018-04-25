'use strict';

Promise.resolve('ok')
  .then(() => {
    throw new Error('Oops !');
  });
