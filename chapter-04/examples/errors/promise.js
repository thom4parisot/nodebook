'use strict';

Promise.resolve('ok')
  .then((message) => {
    throw new Error('Oops !');                      // <1>
  })
  .catch((error) => console.error(error));          // <2>
