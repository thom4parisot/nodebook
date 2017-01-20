#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const rootPath = path.join(__dirname, '..');

const onSymlinked = (chapter) => {
  return (err) => {

    if (err && err.code === 'EEXIST') {
      return console.log('symlinking %s [exists]', chapter);
    }
    else if (err) {
      throw err;
    }
    else {
      return console.log('symlinking %s [DONE]', chapter);
    }
  }
};

fs.readdir(rootPath, (err, files) => {
  if (err) {
    throw err;
  }

  files
    .filter(file => /^chapter-\d{2}/.test(file))
    .forEach((chapter) => {
      let sourcePath;

      try {
        sourcePath = path.dirname(require.resolve('nodebook.' + chapter));
      }
      catch (err){
        return console.log('symlinking %s [skipped]', chapter);
      }

      const targetPath = path.join(rootPath, chapter, 'examples');

      fs.symlink(sourcePath, targetPath, 'dir', onSymlinked(chapter));
    });
});
