'use strict';

// On concatène 2 chaînes de caractères <1>
const baseUrl = 'https://oncletom.io/node.js';
const filePath = `${baseUrl}/package.json`;

// On affiche un message au clic sur la page <2>
const docBody = document.querySelector('body');
docBody.addEventListener('click', () => alert('Hello World!'));

// On affiche des informations contenues dans un fichier distant <3>
fetch(filePath)
  .then(response => response.json())
  .then(pkg => console.log(`${pkg.name}@${pkg.version}`));

// On liste le contenu du répertoire utilisateur <4>
const {homedir} = require('os');
const fs = require('fs');
fs.readdir(homedir(), (err, files) => {
  err ? console.error(err) : console.log(files);
});
