'use strict';

const {createServer} = require('http');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  if (request.url === '/') {                        // <1>
    response.end('<a href="/hello">clique-moi</a>');
  }
  else {
    response.statusCode = 404;                      // <2>
    response.end('<h1>Page introuvable</h1>');      // <3>
  }
});
