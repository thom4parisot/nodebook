'use strict';

const {createServer} = require('http');
const router = require('find-my-way')();

router.get('/hello/:word', (req, response, params) => { // <1>
  response.end(`<p>hello ${params.word}</p>`);          // <2>
});

const server = createServer().listen(4000)
  .on('request', (req, res) => router.lookup(req, res));
