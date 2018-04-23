#!/usr/bin/env node

'use strict';

const http = require('http');
const finalhandler = require('finalhandler');
const getPort = require('get-port');
const {spawn} = require('child_process');
const {dirname,sep,extname,basename} = require('path');

const {PORT=3000, HOST='127.0.0.1'} = process.env;

/*
 Static files handling
 */
const serveStatic = require('serve-static');
const staticDist = serveStatic('./dist');
const staticRoot = serveStatic('./');

/*
 Server definition
 */
const server = http.createServer((req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');

  staticDist(req, res, () => {
    staticRoot(req, res, finalhandler(req, res));
  });
});

const startServer = (port, host=HOST) => {
  const url = `http://${host}:${port}`;

  return server.listen(port, host, () => {
    console.log('Livre consultable sur %s', url);
  });
}

const rebuild = (path) => {
  const source = extname(path) === '.adoc' ? basename(path): 'index.adoc';
  const file = `${dirname(path).split(sep).shift()}/${source}`;

  spawn('node', ['bin/build.js', file])
    .on('close', (code) => {
      console.log('%s  %s', code === 0 ? '✅' : '❌', file);
    });
};

/*
 Starting the server after finding a proper port
*/

module.exports = startServer;

if (require.main === module) {
  // eslint-disable-next-line global-require
  const chokidar = require('chokidar');
  const WATCH_OPTIONS = {
    ignoreInitial: true
  };

  // check for file changes
  chokidar.watch(['**/*.adoc', '*/examples/**/*'], WATCH_OPTIONS)
    .on('add', rebuild)
    .on('change', rebuild);

  // effectively start the server
  getPort({ port: PORT, host: HOST }).then(startServer)
}
