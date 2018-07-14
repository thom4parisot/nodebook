'use strict';

const {createServer} = require('http');
const getStream = require('get-stream');

const onRequest = (request, response) => {
  getStream(request).then(body => {
    console.log(request.headers['content-type']); // <1>
    console.log(body);                            // <2>
    response.end();
  });
};

createServer(onRequest).listen(4000);
