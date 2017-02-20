const http = require('http');
const express = require('express');

const WebsocketRoute = require('./examples/io/websocket-server.js');
const EventSourceRoute = require('./examples/io/eventsource-server.js');
const FetchRoute = require('./examples/io/fetch-server.js');

const app = express();
const server = http.createServer(app);

WebsocketRoute(server);
EventSourceRoute(app);
FetchRoute(app);

app.use('/', express.static('./'));

server.listen(4000, () => {
  console.log('Listening on http://localhost:4000')
});
