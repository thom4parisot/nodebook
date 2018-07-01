const http = require('http');
const server = http.createServer();

server.listen(4000, 'localhost');                   // <1>

server.on('listening', () => {                      // <2>
  console.log('Serveur démarré !');
});

server.on('request', (request, response) => {
  const {method, url} = request;
  console.log('URL demandée : %s %s', method, url); // <3>

  response.end('Coucou');                           // <4>
});
