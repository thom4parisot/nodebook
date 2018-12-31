'use strict';

const {readFileSync} = require('fs');
const {join, dirname} = require('path');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/index.js');

// css, markup (html, xml, css, svg) and javascript are loaded by default
const DEFAULT_LANGUAGES = [
  'apacheconf',
  'bash',
  'docker',
  'http',
  'json',
  'jsx',
  'less',
  'markdown',
  'nginx',
  'properties',
  'sass',
  'scss',
  'typescript',
  'tsx',
  'yaml',
];

const hasLanguage = (block) => block.getAttribute('language');

module.exports = function prismExtension (languages=DEFAULT_LANGUAGES, theme='prism.css') {
  loadLanguages(languages);

  Prism.languages.yml = Prism.languages.yaml;

  Prism.hooks.add('before-tokenize', (env) => {
    env.code = env.code.replace(/<b class="conum">\((\d+)\)<\/b>/gi, '____$1____');
  });

  const unescape = html => {
    return html.replace(/=&gt;/gi, '=>')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>');
  }

  this.treeProcessor(function(){
    this.process(doc => {
      if (doc.backend !== 'html5') {
        return doc;
      }

      doc.findBy({ context: 'listing' }, hasLanguage).forEach(block => {
        const lang = block.getAttribute('language');

        if (Prism.languages[lang] === undefined) {
          throw Error(`Prism language conversion failed; tried ${lang} (loaded: ${languages})`);
        }

        const output = Prism.highlight(unescape(block.getContent()), Prism.languages[lang]);
        block.lines = output.replace(/____(\d+)____/gi, '<b class="conum">($1)</b>').split('\n');
        block.removeSubstitution('specialcharacters');
        block.removeSubstitution('specialchars');
        block.addRole('prismjs');
        block.addRole('highlight-prismjs');
      });
    });
  });

  this.docinfoProcessor(function(){
    this.process(({backend}) => {
      if (backend !== 'html5') {
        return '';
      }

      const prism_folder = dirname(require.resolve('prismjs'));
      const theme_location = join(prism_folder, 'themes', theme);
      const output = readFileSync(theme_location);

      return `<style type="text/css" class="prism-theme">${output}</style>`;
    });
  });
};
