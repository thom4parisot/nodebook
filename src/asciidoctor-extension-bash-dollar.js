'use strict';

const isBash = (b) => b.getAttribute('language', 'bash');
const index = (blocks, block) => blocks.findIndex(el => el === block);

module.exports = function bash$Extension () {
  this.treeProcessor(function(){
    this.process(doc => {
      doc.findBy({ context: 'listing' }, isBash).forEach(block => {
        const {parent} = block;

        let isModified = false;

        const lines = block.lines.map(line => {
          if (line[0] === '$' && line[1] === ' ') {
            isModified = true;
            return '<span class=dollar></span>' + line.slice(2);
          }

          return line;
        });

        if (isModified) {
          const blockIndex = index(parent.getBlocks(), block);

          block.lines = lines;
          block.$remove_sub('specialcharacters');

          parent.blocks[blockIndex] = block;
        }
      });
    });
  });

  this.docinfoProcessor(function(){
    this.process(() => {
      return `<style type="text/css">
.listingblock .dollar::before{
  content: "$ ";
  opacity: .5; }
</style>`;
    });
  });
};
