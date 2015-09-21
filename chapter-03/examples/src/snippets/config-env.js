'use strict';

var server = require('http').createServer();

var defaultPort = process.env.NODE_ENV === 'test' ? 3001 : 3000;

// …

server.listen(process.env.PORT || defaultPort);