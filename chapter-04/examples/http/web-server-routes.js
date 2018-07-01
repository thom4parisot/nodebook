const http = require('http');
const server = http.createServer();
server.listen(4000, 'localhost');

server.on('request', (request, response) => {
  if (request.url === '/main.css') {                     // <1>
    response.setHeader('Content-Type', 'text/css');      // <2>
    response.write('body{ font-size: 18px; color: blue; }');
    response.end();
  }
  else {
    const content_type = 'text/html; charset=utf-8';

    response.setHeader('Content-Type', content_type);
    response.write('<link rel="stylesheet" href="/main.css">');
    response.end('<h1>Salut à toi</h1>');
  }
});
