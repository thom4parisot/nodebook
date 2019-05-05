'use strict';

module.exports = function externalLinksAttributes () {
    this.docinfoProcessor(function(){
      this.process(({backend}) => {
        if (backend !== 'html5') {
          return '';
        }

        return `<script>
  (function(d){
    const {origin} = window.location;

    Array.from(document.querySelectorAll('a[href]'))
      .filter(link => link.href.indexOf(origin) !== 0)
      .forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
      });
  })(document);</script>`;
      });
    });
};
