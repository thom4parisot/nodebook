'use strict';

const http = require('http');
const faye = require('faye');

const ws = new faye.NodeAdapter({ mount: '/realtime', timeout: 10 });

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Tyoe': 'text/plain' });
  res.end('Contenu non temps réel');
});

ws.attach(server);
server.listen(3000);
