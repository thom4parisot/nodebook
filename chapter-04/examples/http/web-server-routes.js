const http = require('http');
const server = http.createServer();
server.listen(4000, 'localhost');

server.on('request', (request, response) => {
  if (request.url === '/main.css') {                                    // <1>
    response.setHeader('Content-Type', 'text/css; charset=utf-8');      // <2>
    response.write('body{ font: 18px/1.5 sans-serif; color: blue; }');
    response.end();
  }
  else {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.write('<link rel="stylesheet" href="/main.css">');
    response.end('<h1>Salut à toi</h1>');
  }
});
