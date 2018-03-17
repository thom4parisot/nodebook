'use strict';

module.exports = function hashScrollExtension () {

  this.docinfoProcessor(function(){
    this.process(() => {
      return `<script src="https://wzrd.in/standalone/menuspy"></script>
<script>window.addEventListener('load', () => new menuspy(document.querySelector('#toc'), {enableLocationHash: false}))</script>
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
