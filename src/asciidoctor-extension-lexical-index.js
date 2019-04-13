'use strict';

module.exports = function LexicalIndexExtension () {
  this.treeProcessor(function(){
    this.process(doc => {
      if (doc.backend !== 'html5') {
        return doc;
      }

      doc.findBy({context: 'paragraph'}).forEach(block => {
        // console.log(block.lines);
      });
    });
  });

  this.postprocessor(function(){
    this.process(doc => {
      if (doc.backend !== 'html5') {
        return doc;
      }

      console.log(doc.getIndexTerms())

      return '';
    });
  });
};
