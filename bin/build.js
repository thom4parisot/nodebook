'use strict'

const {join} = require('path');
const ora = require('ora');
const processor = require('asciidoctor.js')();
const runnerExtension = require('asciidoctor-extension-interactive-runner');
const microtypoExtension = require('../src/asciidoctor-microtypography-french.js');
const bash$Extension = require('../src/asciidoctor-extension-bash-dollar.js');
const MDNExtension = require('../src/asciidoctor-extension-mdn.js');
const hashScroll = require('../src/asciidoctor-toc-hash-scroll.js');
const styles = require('../src/asciidoctor-opendocument-styles.js');

require('asciidoctor-converter-opendocument')(processor, {styles});
require('asciidoctor-docbook.js')();

var DEFAULT_ATTRIBUTES = [
  'toc=left',
  'toclevels=4',
  'caution-caption=⚠️',
  'important-caption=‼️',
  'webfonts!',
  'stylesheet=main.css',
  `stylesdir=${join(__dirname, '..', 'src')}`,
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

processor.Extensions.register(microtypoExtension);
processor.Extensions.register(runnerExtension);
processor.Extensions.register(bash$Extension);
processor.Extensions.register(MDNExtension);
processor.Extensions.register(hashScroll);

const builder = (backend, ext, attributes=DEFAULT_ATTRIBUTES) => {
  const spinner = ora({ interval: 30 });

  return (SOURCE_FILE) => {
    const destinationFile = SOURCE_FILE.replace('.adoc', ext);
    spinner.start(`${SOURCE_FILE} (${destinationFile})`);

    processor.convertFile(join(__dirname, '..', SOURCE_FILE), {
      'to_file': `${join(BUILD_DIR, destinationFile)}`,
      mkdirs: true,
      safe: 'unsafe',
      doctype: 'book',
      backend,
      attributes,
    });

    spinner.stopAndPersist({ symbol: '📦' });
  }
}

module.exports = builder;

if (require.main === module) {
  const [,, BACKEND, EXTENSION, ...FILES] = process.argv;
  const build = builder(BACKEND, EXTENSION);

  FILES.forEach(build);
}
