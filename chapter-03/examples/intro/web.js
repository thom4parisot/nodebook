'use strict';

fetch('https://apprendre-nodejs.fr/v1/package.json')
  .then(response => response.json())
  .then(pkg => console.log(`${pkg.name}@${pkg.version}`));
