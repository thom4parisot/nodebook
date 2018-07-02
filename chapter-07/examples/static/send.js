'use strict';

const {createServer} = require('http');
const {join} = require('path');
const send = require('send');
const router = require('find-my-way')();

const staticFiles = (request, response, params) => {
  const pathname = params['*'];               // <2>
  const filename = join(__dirname, 'files', pathname);

  send(request, filename).pipe(response);     // <3>
};

router.get('/files/*', staticFiles);          // <1>
router.head('/files/*', staticFiles);

const server = createServer().listen(4000)
  .on('request', (req, res) => router.lookup(req, res));
