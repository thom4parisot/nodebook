'use strict';

var server = require('http').createServer();
server.setMaxListeners(20);
server.listen(4000);

server.on('request', function(req, res){
  // ...
  res.writeHead(204, null);
  res.end();
});

if (process.env.NODE_ENV !== 'production'){
  server.on('request', function(req){
    console.log(req.headers);
  });
}

server.on('error', function(err){
  // ...
});