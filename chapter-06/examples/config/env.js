'use strict';

const server = require('http').createServer();
const defaultPort = process.env.NODE_ENV === 'test' ? 3001 : 3000;

// …

server.listen(process.env.PORT || defaultPort);
