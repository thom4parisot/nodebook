'use strict';

const http = require('http');
const {parse} = require('url');

const server = http.createServer((req, res) => {
  // eslint-disable-next-line
  const {query} = parse(reb.url, true); // <1>

  res.end();
});

server.listen(4001);
process.on('uncaughtException', err => console.error(err)); // <2>

setTimeout(() => http.get('http://localhost:4001/'), 1000); // <3>
