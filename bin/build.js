'use strict'

const {join} = require('path');
const ora = require('ora');
const asciidoctor = require('@asciidoctor/core')();
const runnerExtension = require('asciidoctor-extension-interactive-runner');
const microtypoExtension = require('../src/asciidoctor-microtypography-french.js');
const bash$Extension = require('../src/asciidoctor-extension-bash-dollar.js');
const prismExtension = require('asciidoctor-prism-extension');
const MDNExtension = require('../src/asciidoctor-extension-mdn.js');
const hashScroll = require('../src/asciidoctor-toc-hash-scroll.js');
const styles = require('../src/asciidoctor-opendocument-styles.js');
const memoryLogger = asciidoctor.MemoryLogger.create();

require('asciidoctor-converter-opendocument')(asciidoctor, {styles});
require('@asciidoctor/docbook-converter')();

var DEFAULT_ATTRIBUTES = [
  'toc=left',
  'toclevels=4',
  'webfonts!',
  'revdate!',
  'nofooter',
  'stylesheet=book.css',
  `stylesdir=${join(__dirname, '..', 'src')}`,
  'linkattrs',
  'lang=fr',
  'env=ci',
  'hide-uri-scheme',
  'experimental',
  'idprefix',
  'source-highlighter=prism',
  'prism-languages=apacheconf,bash,docker,http,ini,json,jsx,less,markdown,nginx,properties,sass,scss,typescript,tsx,yaml',
  'prism-theme',
  'toc-title=Table des matières',
  'appendix-caption=Annexe',
  'last-update-label=Dernière mise à jour',
  'example-caption=Exemple',
  'caution-caption=⚠️',
  'important-caption=‼️',
  'note-caption=💬',
  'tip-caption=💡',
  'warning-caption=🚨',
  'table-caption=Tableau',
  'untitled-label=Sans titre',
  'mdn-caption-prefix=[RemarquePreTitre]#Documentation#',
  'docinfo=shared',
  `docinfodir=${join(__dirname, '..', 'src')}`,
];

const BUILD_DIR = join(__dirname, '..', 'dist');

asciidoctor.LoggerManager.setLogger(memoryLogger);
asciidoctor.SyntaxHighlighter.register('prism', prismExtension);
asciidoctor.Extensions.register(microtypoExtension);
asciidoctor.Extensions.register(runnerExtension);
asciidoctor.Extensions.register(bash$Extension);
asciidoctor.Extensions.register(MDNExtension);
asciidoctor.Extensions.register(hashScroll);

const builder = (backend, ext, attributes=DEFAULT_ATTRIBUTES) => {
  const spinner = ora({ interval: 30 });

  return (SOURCE_FILE) => {
    const destinationFile = SOURCE_FILE.replace('.adoc', ext);
    const source = `${SOURCE_FILE} (${destinationFile})`;
    spinner.start(source);

    asciidoctor.convertFile(join(__dirname, '..', SOURCE_FILE), {
      'to_file': `${join(BUILD_DIR, destinationFile)}`,
      mkdirs: true,
      safe: 'unsafe',
      doctype: 'book',
      backend,
      attributes,
    });

    spinner.succeed();

    if (!memoryLogger.getMessages().length) {
      memoryLogger.getMessages().map(({message}) => {
        const lineno = message.getSourceLocation().getLineNumber();
        spinner.warn(`${SOURCE_FILE}:${lineno} • ${message.getText()}`);
      });
      memoryLogger.$clear();
    }
  }
}

module.exports = builder;

if (require.main === module) {
  const [,, BACKEND, EXTENSION, ...FILES] = process.argv;
  const build = builder(BACKEND, EXTENSION);

  FILES.forEach(build);
}
