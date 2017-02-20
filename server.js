#!/usr/bin/env node

'use strict';

const http = require('http');
const finalhandler = require('finalhandler');
const getPort = require('get-port');

const PORT = process.env.PORT;

/*
 Static files handling
 */
const serveStatic = require('serve-static');
const staticResponse = serveStatic('.', { etag: false, dotfiles: 'allow' });
serveStatic.mime.define({ 'text/plain': ['adoc'] });

/*
 Server definition
 */
const server = http.createServer((req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');

  staticResponse(req, res, finalhandler(req, res));
});

const startServer = (port) => {
  const url = `http://localhost:${port}/index.adoc`;

  return server.listen(port, () => {
    console.log('Book content served at %s', url);
    console.log('Make sure the Asciidoctor.js Chrome extension is installed and runs in safe mode – %s', 'https://chrome.google.com/webstore/detail/asciidoctorjs-live-preview/iaalpfgpbocpdfblpnhhgllgbdbchmia');
  });
}

/*
 Starting the server after finding a proper port
*/

module.exports = startServer;

if (require.main === module) {
  (PORT ? Promise.resolve(PORT) : getPort())
    .then(startServer)
}
