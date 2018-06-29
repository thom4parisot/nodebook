'use strict';

const {createServer} = require('http');

const server = createServer();

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'text/html');  // <1>
  response.end('<h1>Hello World</h1>');

  console.log(request.headers);                     // <2>
  console.log(response.getHeaders());               // <3>
});

server.listen(4000);
