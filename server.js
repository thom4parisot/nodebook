#!/usr/bin/env node

'use strict';

const http = require('http');
const finalhandler = require('finalhandler');
const getPort = require('get-port');
const {dirname, sep, extname, basename} = require('path');

const {PORT:port=3000, HOST:host='127.0.0.1'} = process.env;

/*
 Static files handling
 */
const serveStatic = require('serve-static');
const staticDist = serveStatic('./dist');
const staticRoot = serveStatic('./');

/*
 Server definition
 */
const server = http.createServer((request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');

  staticDist(request, response, () => {
    staticRoot(request, response, finalhandler(request, response));
  });
});

const startServer = (port) => {
  const url = `http://${host}:${port}`;

  return server.listen(port, host, () => {
    console.log('💡  Livre consultable sur %s', url);
  });
}

module.exports = startServer;

if (require.main === module) {
  /* eslint-disable global-require */
  const chokidar = require('chokidar');
  const build = require('./bin/build')('html5', '.html');

  const rebuild = (path) => {
    const source = extname(path) === '.adoc' ? basename(path): 'index.adoc';
    const file = `${dirname(path).split(sep).shift()}/${source}`;

    build(file);
  };

  // effectively start the server
  getPort({ port, host }).then(startServer);

  // check for file changes
  chokidar.watch(['**/*.adoc', '*/examples/**/*'], { ignoreInitial: true })
    .on('add', rebuild)
    .on('change', rebuild)
    .on('error', console.error);
}
