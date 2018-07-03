'use strict';

const {createServer} = require('http');
const {parse} = require('cookie');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  const cookies = parse(request.headers.cookie);  // <1>

  response.end(JSON.stringify(cookies));          // <2>
});
