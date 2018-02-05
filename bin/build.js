'use strict'

const {join} = require('path');
const processor = require('asciidoctor.js')();
const runnerExtension = require('asciidoctor-extension-interactive-runner');
const bash$Extension = require('../src/asciidoctor-extension-bash-dollar');
const MDNExtension = require('../src/asciidoctor-extension-mdn');
const customStyles = require('../src/asciidoctor-custom-styles');
const BUILD_DIR = 'dist';

var DEFAULT_ATTRIBUTES = [
  'toc=macro',
  'toclevels=4',
  'caution-caption=⚠️',
  'important-caption=‼️',
  'note-caption=💬',
  'tip-caption=💡',
  'warning-caption=🚨',
  'mdn-caption-prefix=[RemarquePreTitre]#Documentation#',
  'linkattrs',
  'lang=fr',
  'env=ci',
  'hide-uri-scheme',
  'experimental',
  'idprefix',
  'source-highlighter=highlightjs',
  'toc-title=Table des matières',
  'appendix-caption=Annexe',
  'last-update-label=Dernière mise à jour'
];

const FILES = process.argv.slice(2);

processor.Extensions.register(runnerExtension);
processor.Extensions.register(bash$Extension);
processor.Extensions.register(MDNExtension);
processor.Extensions.register(customStyles);

FILES.forEach(SOURCE_FILE => {
  const destinationFile = SOURCE_FILE.replace('.adoc', '.html');
  console.log(`${SOURCE_FILE} -> ${destinationFile}`);

  processor.convertFile(join(__dirname, '..', SOURCE_FILE), {
    'to_file': `${BUILD_DIR}/${destinationFile}`,
    'mkdirs': true,
    'safe': 'unsafe',
    'backend': 'html5',
    'doctype': 'book',
    'attributes': DEFAULT_ATTRIBUTES
  });
});
