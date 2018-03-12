'use strict';

module.exports = function HTMLStyles () {
  this.docinfoProcessor(function(){
    this.process(() => {
      return `<style type="text/css">
.admonitionblock td.content > .title, .audioblock > .title, .exampleblock > .title, .imageblock > .title, .listingblock > .title, .literalblock > .title, .stemblock > .title, .openblock > .title, .paragraph > .title, .quoteblock > .title, table.tableblock > .title, .verseblock > .title, .videoblock > .title, .dlist > .title, .olist > .title, .ulist > .title, .qlist > .title, .hdlist > .title, #toctitle {
  font-style: normal;
  font-weight: bold;
}

.admonitionblock td.content > .title, .audioblock > .title, .exampleblock > .title, .imageblock > .title, .listingblock > .title, .literalblock > .title, .stemblock > .title, .openblock > .title, .paragraph > .title, .quoteblock > .title, table.tableblock > .title, .verseblock > .title, .videoblock > .title, .dlist > .title, .olist > .title, .ulist > .title, .qlist > .title, .hdlist > .title {
  font-size: 1.0625rem;
}

a {
  white-space: nowrap;
}
.RemarquePreTitre {
  background-color: #ffc;
  border-bottom: 1px solid #ddddd8;
  font-style: normal;
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
}
.admonitionblock {
}
.admonitionblock table {
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  margin: 1.5em 0;
  padding: 1em;
}
.icon .title {
  font-size: 2em;
}
</style>`;
    });
  });
};
