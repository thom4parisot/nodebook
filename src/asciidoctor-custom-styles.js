'use strict';

module.exports = function HTMLStyles () {
  this.docinfoProcessor(function(){
    this.process(() => {
      return `<style type="text/css">
.admonitionblock td.content > .title, .audioblock > .title, .exampleblock > .title, .imageblock > .title, .listingblock > .title, .literalblock > .title, .stemblock > .title, .openblock > .title, .paragraph > .title, .quoteblock > .title, table.tableblock > .title, .verseblock > .title, .videoblock > .title, .dlist > .title, .olist > .title, .ulist > .title, .qlist > .title, .hdlist > .title, #toctitle {
  font-style: normal;
  font-weight: bold;
}
.RemarquePreTitre {
	font-style: normal;
  font-weight: bold;
	border-bottom: 1px solid #ddddd8;
}
.icon .title {
  font-size: 2em;
}
</style>`;
    });
  });
};
