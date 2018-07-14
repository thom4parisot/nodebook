'use strict';

const {createServer} = require('http');
const getStream = require('get-stream');

const onRequest = (request, response) => {
  getStream(request).then(body => {
    console.log(request.headers['content-type']);
    console.log(body);
    response.end();
  });
};

createServer(onRequest).listen(4000);
