'use strict';

const server = require('http').createServer();
const defaultPort = process.env.NODE_ENV === 'test' ? 3001 : 3000;

const {PORT=defaultPort} = process.env; // <1>

server.listen(PORT, () => {
  console.log(`En écoute sur http://localhost:${PORT}`);
});
