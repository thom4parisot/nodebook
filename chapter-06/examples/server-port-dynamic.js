'use strict';

const server = require('http').createServer();
const {PORT=8000} = process.env;  // <1>

server.listen(PORT, () => console.log(`localhost:${PORT}`));
