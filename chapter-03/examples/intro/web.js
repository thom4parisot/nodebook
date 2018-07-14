'use strict';

fetch('https://oncletom.io/node.js/package.json')
  .then(response => response.json())
  .then(pkg => console.log(`${pkg.name}@${pkg.version}`));
