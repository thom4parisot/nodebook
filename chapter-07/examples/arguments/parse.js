'use strict';

const {createServer} = require('http');
const {parse} = require('url');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  const {search, query} = parse(request.url, true); // <1>

  response.write(`${search}\n\n`);                  // <2>
  response.write(JSON.stringify(query));            // <3>
  response.end();
});
