'use strict';

const {createServer} = require('http');
const getPort = require('get-port');
const server = createServer();

getPort({ port: 4000 }).then(port => {      // <1>
  console.log(`http://localhost:${port}`);  // <2>
  server.listen(port);                      // <3>
});
