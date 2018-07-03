'use strict';

const {createServer} = require('http');
const {parse, serialize} = require('cookie');
const server = createServer().listen(4000);

server.on('request', (request, response) => {
  const {compteur} = parse(request.headers.cookie);
  const compteur2 = Number(compteur) + 1;

  response.setHeader('Set-Cookie', [                    // <1>
    'language=fr; Max-Age: 9000000',                    // <2>
    'is_admin=1; Path=/admin; HttpOnly',                // <3>
    serialize('compteur', compteur2, {httpOnly: true}), // <4>
    //`compteur=${compteur2}; HttpOnly`                 // <5>
  ]);

  response.end();
});
