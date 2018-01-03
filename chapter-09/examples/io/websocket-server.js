const WebSocket = require('faye-websocket');
const chance = require('chance').Chance();

module.exports = (server) => {
  server.on('upgrade', (req, socket, body, next) => {  // <1>
    if (!WebSocket.isWebSocket(req)) {           // <2>
      return next();
    }

    let ws = new WebSocket(req, socket, body);   // <3>

    ws.on('message', event => {                  // <4>
      const data = JSON.parse(event.data);

      if (data.action === 'getName') {
        ws.send(chance.name());                  // <5>
      }
    });

    ws.on('close', () => {
      ws = null;
    });
  });
};
