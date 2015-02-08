#!/usr/bin/env node

'use strict';

var http = require('http');
var finalhandler = require('finalhandler');

/*
 Static files handling
 */
var serveStatic = require('serve-static');
var staticResponse = serveStatic('.', { etag: false, dotfiles: 'allow' });
serveStatic.mime.define({ 'text/plain': ['adoc'] });

/*
 Server definition
 */
var server = http.createServer(function(req, res){
  res.setHeader('X-Content-Type-Options', 'nosniff');

  staticResponse(req, res, finalhandler(req, res));
});

/*
 Starting the server after finding a proper port
 */
require('getport')(3000, function(err, port){
  if (err) {
    throw err;
  }

  server.listen(port, function(){
    console.log('Browse the content of the book at http://localhost:%d/index.adoc', port);
    console.log('Make sure the Asciidoctor.js Chrome extension is installed – %s', 'https://chrome.google.com/webstore/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia');
  });
});
