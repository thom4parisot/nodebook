'use strict';

const {createServer} = require('http');
const parse = require('co-body');

const onRequest = (request, response) => {
  parse(request)                                    // <1>
    .then(body => {
      console.log(request.headers['content-type']);
      console.log(body);                            // <2>
    })
    .catch(error => console.error(error.message))   // <3>
    .finally(() => response.end());
};

createServer(onRequest).listen(4000);
