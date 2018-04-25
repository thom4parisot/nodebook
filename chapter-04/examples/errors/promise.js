'use strict';

Promise.resolve('ok')
  .then((message) => {
    throw new Error('Oops !');                      // <1>

    /* eslint-disable-next-line no-unreachable */
    console.log('Message reçu : %s', message);
  })
  .catch((error) => console.error(error));          // <2>
