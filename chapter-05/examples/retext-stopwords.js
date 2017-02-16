'use strict';

const visit = require('unist-util-visit');

module.exports = (retext, options) => {
  const stopwords = options.stopwords;

  return node => {
    visit(node, 'WordNode', node => {
      node.children = node.children.filter(d => {
        return stopwords.indexOf(d.value) === -1;
      });
    });
  };
};
