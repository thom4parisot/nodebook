'use strict';

const {createServer} = require('http');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  if (request.url === '/') {                        // <1>
    response.end('<a href="/hello">clique-moi</a>');
  }
  else if (request.url === '/coucou') {             // <2>
    response.end('<a href="/">coucou !</a>');
  }
});
