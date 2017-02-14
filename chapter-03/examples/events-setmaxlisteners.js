'use strict';

const server = require('http').createServer();
server.setMaxListeners(20);
server.listen(4000);

server.on('request', (req, res) => {
  // ...
  res.writeHead(204, null);
  res.end();
});

if (process.env.NODE_ENV !== 'production') {
  server.on('request', req => console.log(req.headers));
}

server.on('error', err => {
  if (err) {
    // ...
  }
  // ...
});
