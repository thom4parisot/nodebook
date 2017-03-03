'use strict';

const chokidar = require('chokidar');
const path = require('path');
const rootDir = path.join(__dirname, '..', '..');

const options = {
  ignoreInitial: true,
  ignored: /node_modules/,
  persistent: true
};

const watcher = chokidar.watch(rootDir, options);

watcher.on('add', filepath => {
  console.log('add - %s', path.relative(rootDir, filepath));
});
watcher.on('addDir', filepath => {
  console.log('addDir - %s', path.relative(rootDir, filepath));
});
watcher.on('change', filepath => {
  console.log('change - %s', path.relative(rootDir, filepath));
});

setTimeout(() => {
  // eslint-disable-next-line global-require
  require('./mkdirp');

  setTimeout(watcher.close.bind(watcher), 200);
}, 400);
