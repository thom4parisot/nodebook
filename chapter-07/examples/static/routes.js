'use strict';

const {createServer} = require('http');
const {createReadStream} = require('fs');
const {join} = require('path');
const router = require('find-my-way')();

const staticFiles = (request, response, params) => {
  const filename = join(__dirname, 'files', params.file);// <1>
  createReadStream(filename).pipe(response);             // <2>
};

router.get('/files/:file', staticFiles);
router.head('/files/:file', staticFiles);

const server = createServer().listen(4000)
  .on('request', (req, res) => router.lookup(req, res));
