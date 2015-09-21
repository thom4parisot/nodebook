'use strict';

var chokidar = require('chokidar');
var path = require('path');
var rootDir = path.join(__dirname, '..', '..');

var options = {
  ignoreInitial: true,
  persistent: true
};

var watcher = chokidar.watch(rootDir, options);

watcher.on('add', function(filepath){
  console.log('add - %s', path.relative(rootDir, filepath));
});
watcher.on('addDir', function(filepath){
  console.log('addDir - %s', path.relative(rootDir, filepath));
});

setTimeout(function(){
  require('./npm-mkdirp');

  setTimeout(watcher.close, 200);
}, 200);

