'use strict';

const isBash = (b) => b.getAttribute('language', 'bash');
const index = (blocks, block) => blocks.findIndex(el => el === block);

module.exports = function bash$Extension () {
  this.treeProcessor(function(){
    this.process(doc => {
      if (doc.backend !== 'html5') {
        return doc;
      }

      doc.findBy({ context: 'listing' }, isBash).forEach(block => {
        const {parent} = block;

        let isModified = false;

        const lines = block.lines.map(line => {
          if (line[0] === '$' && line[1] === ' ') {
            isModified = true;
            line = '<span data-bash-subs="$"></span>' + block.$sub_specialchars(line.slice(2));
          }

          if (line[0] === '>' && line[1] === ' ') {
            isModified = true;
            line = '<span data-bash-subs=">"></span>' + block.$sub_specialchars(line.slice(2));
          }

          line = line.replace(/# &lt;(\d+)&gt;$/, (match, id) => {
            isModified = true;
            return ` <span data-bash-conum="${id}"></span>`;
          });

          return isModified ? line : block.$sub_specialchars(line);
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
    this.process(({backend}) => {
      if (backend !== 'html5') {
        return '';
      }

      return `<style type="text/css">
.listingblock [data-bash-subs]::before {
  content: attr(data-bash-subs) " ";
  opacity: .5; }

.listingblock [data-bash-conum]::before {
  content: "(" attr(data-bash-conum) ")";
  font-weight: bold;
  opacity: .7;
}</style>`;
    });
  });
};
