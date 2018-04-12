'use strict';

module.exports = function hashScrollExtension () {

  this.docinfoProcessor(function(){
    this.process(() => {
      return `<script>
(function(d){
  d.addEventListener('DOMContentLoaded', function(){
    const script = d.createElement('script');
    script.src = 'https://wzrd.in/standalone/menuspy';
    script.async = true;
    script.onload = () => new menuspy(document.querySelector('#toc'), {enableLocationHash: false});
    d.body.appendChild(script);
  });
})(document);</script>
<style type="text/css">
#toc li.active > a[href^="#"] {
  background: #ffc;
  font-weight: bold;
}
#toc li.active > a[href^="#"]::before {
  content: "▶ ";
  display: inline-block;
  position: absolute;
  margin-left: -1.2em;
  font-size: .8em;
  margin-top: 3px;
}
</style>`;
    });
  });
};
