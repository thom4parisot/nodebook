const http = require('http');
const server = http.createServer();

server.listen(4000, 'localhost');                                   // <1>
server.on('listening', () => console.log('Serveur démarré !'));     // <2>
server.on('request', (request, response) => {
  console.log('URL demandée : %s %s', request.method, request.url); // <3>

  response.end('Coucou');                                           // <4>
});
