'use strict';

var http = require('http');
var faye = require('faye');

var ws = new faye.NodeAdapter({ mount: '/realtime', timeout: 10 });

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Tyoe': 'text/plain' });
  res.end('Contenu non temps réel');
});

ws.attach(server);
server.listen(3000);