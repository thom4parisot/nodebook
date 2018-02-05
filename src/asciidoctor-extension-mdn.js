'use strict';

const fromHash = (hash) => {
  var to = {};
  for (var i = 0, key, keys = hash.$$keys, data = hash.$$smap, len = keys.length; i < len; i++) {
    key = keys[i];
    to[key] = data[key];
  }
  return to;
};

const lang = 'fr';
const NAMESPACES = {
  global: 'Web/JavaScript/Reference/Global_Objects',
  web: 'Web/API',
  addons: 'Add-ons/WebExtensions/API',
  window: 'Web/API/WindowOrWorkerGlobalScope'
};

module.exports = function MDNExtension () {
  this.blockMacro('mdn', function(){
    this.positionalAttributes('page');
    this.process((parent, target, attributes) => {
      const attrs = fromHash(attributes);
      const {title='',page} = attrs;
      const titleOrPage = title || page;
      
      attrs['textlabel'] = '📖';
      attrs['role'] = 'info';
      attrs['title'] = `[RemarquePreTitre]#Documentation# ${titleOrPage}`;

      const path = NAMESPACES[target] || 'Web/API'

      const content = `
Rendez-vous sur _MDN web docs_ pour en savoir plus sur ${titleOrPage}.

link:https://developer.mozilla.org/docs/${lang}/${path}/${page}[role="URL",window="_blank"]
      `;

      return this.createBlock(parent, 'admonition', content, attrs);
    })
  });
};
