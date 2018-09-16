'use strict';

const {createServer} = require('http');
const {createReadStream} = require('fs');
const {join} = require('path');

const server = createServer().listen(4000);

server.on('request', (requet, response) => {
  const filepath = join(__dirname, 'files', 'doc.pdf'); // <1>
  createReadStream(filepath).pipe(response);            // <2>
});
