'use strict'

const {join} = require('path');
const processor = require('asciidoctor.js')();
const runnerExtension = require('asciidoctor-extension-interactive-runner');
const bash$Extension = require('../src/asciidoctor-extension-bash-dollar');
const MDNExtension = require('../src/asciidoctor-extension-mdn');
const hashScroll = require('../src/asciidoctor-toc-hash-scroll');

var DEFAULT_ATTRIBUTES = [
  'toc=left',
  'toclevels=4',
  'caution-caption=⚠️',
  'important-caption=‼️',
  'webfonts!',
  'stylesheet=main.css',
  `stylesdir=${__dirname}/../src`,
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

const BUILD_DIR = 'dist';
const FILES = process.argv.slice(2);

processor.Extensions.register(runnerExtension);
processor.Extensions.register(bash$Extension);
processor.Extensions.register(MDNExtension);
processor.Extensions.register(hashScroll);

FILES.forEach(SOURCE_FILE => {
  const destinationFile = SOURCE_FILE.replace('.adoc', '.html');
  console.log('📦  %s %s', SOURCE_FILE, destinationFile);

  processor.convertFile(join(__dirname, '..', SOURCE_FILE), {
    'to_file': `${join(BUILD_DIR, destinationFile)}`,
    'mkdirs': true,
    'safe': 'unsafe',
    'backend': 'html5',
    'doctype': 'book',
    'attributes': DEFAULT_ATTRIBUTES
  });
});
