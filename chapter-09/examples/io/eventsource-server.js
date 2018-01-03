const WebSocket = require('faye-websocket');
const {EventSource} = WebSocket;

const chance = require('chance').Chance();

module.exports = (app) => {
  app.get('/new-users', (req, res, next) => {
    if (!EventSource.isEventSource(req)) {      // <1>
      return next();
    }

    let es = new EventSource(req, res);         // <2>
    const loop = setInterval(() => {
      es.send(chance.name());                   // <3>
    }, 2000);

    es.on('close', () => {
      clearInterval(loop);
      es = null;
      next();
    });
  });
};
