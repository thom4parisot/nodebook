#!/usr/bin/env node

'use strict';

const http = require('http');
const finalhandler = require('finalhandler');
const getPort = require('get-port');
const {spawn} = require('child_process');
const {dirname,sep} = require('path');

const PORT = process.env.PORT;
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

const startServer = (port) => {
  const url = `http://localhost:${port}`;

  return server.listen(port, () => {
    console.log('Book content served at %s', url);
  });
}

const rebuild = (path) => {
  const file = `${dirname(path).split(sep).shift()}/index.adoc`;

  spawn('node', ['bin/build.js', file])
    .on('close', (code) => {
      console.log(`${file} build ${code === 0 ? '✅' : '❌'}`);
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
  (PORT ? Promise.resolve(PORT) : getPort())
    .then(startServer)
}
