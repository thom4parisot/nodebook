'use strict';

const {createServer} = require('http');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  response.end(request.url);      // <1>
});
