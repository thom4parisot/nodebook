const http = require('http');
const express = require('express');
const getPort = require('get-port');
const WITH_SYNC = process.argv.indexOf('--with-sync') !== -1;

const WebsocketRoute = require('./examples/io/websocket-server.js');
const EventSourceRoute = require('./examples/io/eventsource-server.js');
const FetchRoute = require('./examples/io/fetch-server.js');
const serverSync = require('./examples/livereload/server-sync.js');

const app = express();
const server = http.createServer(app);

WebsocketRoute(server);
EventSourceRoute(app);
FetchRoute(app);

app.use('/', express.static('./'));

getPort()
  .then(WITH_SYNC ? serverSync(server) : server.listen.bind(server, 4000))
  .then(() => console.log('Listening on http://localhost:4000'))
  .catch(console.error);
