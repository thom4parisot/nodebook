'use strict'

var glob = require('glob');

var processor = require('asciidoctor.js')();
var buildDir = 'dist';

var defaultAttributes = ['data-uri', 'toc=macro', 'toclevels=4', 'icons=font', 'lang=fr', 'env=ci', 'hide-uri-scheme', 'experimental'];
glob('{index.adoc,chapter-*/index.adoc,foreword/*.adoc,appendix-*/*.adoc}', function (err, files) {
  if (err) {
    console.error('Something went wrong!', err);
    process.exit(1);
  }
  files.forEach(function(file) {
    var destinationFile = file.replace('.adoc', '.html');
    // FIXME: Add docinfo1 attribute when Asciidoctor.js will handle missing docinfo file correctly
    var options = {'to_file': buildDir + '/' + destinationFile, 'mkdirs': true, 'safe': 'unsafe', 'backend': 'html5', 'doctype': 'book', 'attributes': defaultAttributes};
    processor.convertFile(file, options);
  });
});
