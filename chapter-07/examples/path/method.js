'use strict';

const {createServer} = require('http');
const router = require('find-my-way')();

router.get('/', (request, response) => {          // <1>
  response.end('Bienvenue');
});

router.head('/', (request, response) => {         // <2>
  response.writeHead(200, {                       // <3>
    'X-Jobs': 'https://jobs.humancoders.com'      // <4>
  });
  response.end('Invisible');                      // <5>
});

const server = createServer().listen(4000)
  .on('request', (req, res) => router.lookup(req, res));
