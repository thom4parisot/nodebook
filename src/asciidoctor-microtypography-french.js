'use strict';

const REGEX = /(\u00AB|\u2014)(?:\s+)|(?:\s+)([?!:;———–\u00BB])/g;

const microtypo = (line) => {
  return REGEX.test(line)
    ? line.replace(REGEX, '$1{nbsp}$2')
    : line;
};

module.exports = function microTypography () {
  this.treeProcessor(function(){
    this.process((doc) => {
      if (doc.backend !== 'html5') {
        return doc;
      }

      doc.findBy({ context: 'paragraph' }).forEach(block => {
        block.lines = block.lines.map(microtypo);
      });

      doc.findBy({ context: 'list_item' }).forEach(block => {
        block.text = microtypo(block.text);
      });
    });
  });

};
