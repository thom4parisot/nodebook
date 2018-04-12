const http = require('http');
const server = http.createServer();
server.listen(4000, 'localhost');

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8'); // <1>

  response.write('<h1>Salut à toi</h1>');
  response.end();
});
