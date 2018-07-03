'use strict';

const {createServer} = require('http');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  const cookie = request.headers.cookie;  // <1>

  response.end(`Contenu : ${cookie}`);    // <2>
});
