'use strict';

const {createServer} = require('http');
const {createReadStream} = require('fs');
const {join} = require('path');
const router = require('find-my-way')();

const staticFiles = (request, response, params) => {
  const filename = join(__dirname, 'files', params.file);// <2>
  createReadStream(filename).pipe(response);
};

router.get('/files/:file', staticFiles);                 // <1>
router.head('/files/:file', staticFiles);

const server = createServer().listen(4000)
  .on('request', (req, res) => router.lookup(req, res));
