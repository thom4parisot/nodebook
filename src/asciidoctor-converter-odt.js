'use strict';

const simpleOdf = require('simple-odf');

module.exports = function ConverterODT (Asciidoctor) {
  class ODTConverter {
    constructor(backend, opts) {
      this.basebackend = 'xml';
      this.outfilesuffix = '.odt';
      this.filetype = 'xml';
      this.htmlsyntax = 'xml';
      this._doc = new simpleOdf.TextDocument();

      this._doc.addHeading("Welcome to simple-odf");
    }

    $convert (node, transform = null, opts = {}) {
      const {_doc:doc} = this;

      switch (transform || node.node_name) {
        case 'document':
          node.getContent();
          return String(doc);

        case 'section':
          doc.addHeading(node.getTitle(), node.getLevel());
          doc.addParagraph(node.getContent());
          return '';
          // return ['#'.repeat(node.getLevel()) + ' ' + node.getTitle(), node.getContent()].join('\n\n');

        case 'paragraph':
        console.log('section')
          doc.addParagraph(node.getContent());
          return '';
          // return node.getContent().trim() + '\n';

        case 'inline_quoted':
        case 'inline_anchor':
        case 'inline_break':
          return node.text;

        case 'listing':
          return `----\n${node.getContent()}\n----\n\n`;

        case 'ulist':
          return node.getItems().map(d => `* ${d.getText()}`) + '\n';

        case 'olist':
          return node.getItems().map(d => `1. ${d.getText()}`) + '\n';

        default:
          return node.text ? node.text : node.getContent();
      }
    }
  }

  Asciidoctor.Converter.Factory.$register(new ODTConverter('odt'), ['odt']);
};
