'use strict'

const processor = require('asciidoctor.js')();
const BUILD_DIR = 'dist';

var DEFAULT_ATTRIBUTES = [
  'data-uri',
  'toc=macro',
  'toclevels=4',
  'icons=font',
  'lang=fr',
  'env=ci',
  'hide-uri-scheme',
  'experimental'
];

const FILES = process.argv.slice(2);

FILES.forEach(SOURCE_FILE => {
  const destinationFile = SOURCE_FILE.replace('.adoc', '.html');
  // FIXME: Add docinfo1 attribute when Asciidoctor.js will handle missing docinfo file correctly

  processor.convertFile(SOURCE_FILE, {
    'to_file': `${BUILD_DIR}/${destinationFile}`,
    'mkdirs': true,
    'safe': 'unsafe',
    'backend': 'html5',
    'doctype': 'book',
    'attributes': DEFAULT_ATTRIBUTES
  });
});
