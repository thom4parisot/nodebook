'use strict';

const http = require('http');
const {parse} = require('url');

const server = http.createServer((request, response) => {
  // eslint-disable-next-line
  const url = parse(requete.url, true); // <1>

  response.end(JSON.stringify(url, null, 2));
});

server.listen(4001);
process.on('uncaughtException', console.error);             // <2>

setTimeout(() => http.get('http://localhost:4001/'), 1000); // <3>
