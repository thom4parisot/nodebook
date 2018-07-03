'use strict';

const {createServer} = require('http');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  response.setHeader('Set-Cookie', 'compteur=1'); // <1>
  response.end();
});
