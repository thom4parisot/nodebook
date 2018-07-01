'use strict';

const {createServer} = require('http');
const router = require('find-my-way')();                // <1>

router.get('/', (request, response) => {                // <2>
  response.end('<a href="/coucou">clique-moi</a>');
});

router.get('/coucou', (request, response) => {          // <3>
  response.end('<a href="/">retour</a>');
});

const server = createServer().listen(4000)
  .on('request', (req, res) => router.lookup(req, res));// <4>
