'use strict';

const View = require('../class-view.js');

const htmlView = new View({ blacklist: ['object', 'iframe']});

console.log(typeof htmlView);                         // <1>
console.log(htmlView instanceof View);                // <2>
console.log(htmlView.config);                         // <3>
console.log(View.removeDuplicates('.', 'Node...js')); // <4>

try {
  htmlView.render({ title: 'Node.js' });
}
catch (err) {
  console.error(err);                                 // <5>
}
