#!/usr/bin/env node

'use strict';

const http = require('http');
const finalhandler = require('finalhandler');
const getPort = require('get-port');

const doOpen = parseInt(process.env.BROWSER_OPEN || 0, 10) === 1;
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
const server = http.createServer(function(req, res){
  res.setHeader('X-Content-Type-Options', 'nosniff');

  staticResponse(req, res, finalhandler(req, res));
});

function startServer(port) {
  const url = `http://localhost:${port}/index.adoc`;

  server.listen(port, function(){
    console.log('Book content served at %s', url);
    console.log('Make sure the Asciidoctor.js Chrome extension is installed and runs in safe mode – %s', 'https://chrome.google.com/webstore/detail/asciidoctorjs-live-preview/iaalpfgpbocpdfblpnhhgllgbdbchmia');
  });
}

/*
 Starting the server after finding a proper port
*/
PORT ? startServer(PORT) : getPort().then(startServer);