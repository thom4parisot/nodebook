#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var rootPath = path.join(__dirname, '..');

fs.readdir(rootPath, function(err, files){
  if (err) {
    throw err;
  }

  files
    .filter(function keepChapterFolders(file){
      return /^chapter-\d{2}/.test(file);
    })
    .forEach(function(chapter){
      try {
        var sourcePath = path.dirname(require.resolve('nodebook.' + chapter));
      }
      catch (err){
        return console.log('symlinking %s [skipped]', chapter);
      }
    
      var targetPath = path.join(rootPath, chapter, 'examples');
    
      fs.symlink(sourcePath, targetPath, 'dir', onSymlinked(chapter));
    });
});

function onSymlinked(chapter) {
  return function(err){
   
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
}
