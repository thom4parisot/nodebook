'use strict';

const csv = require('comma-separated-values'); // <1>
const content = `Titre;Auteur(s);EAN13
CSS maintenables avec Sass et Compass;Kaelig Deloumeau-Prigent;9782212136401
Intégration web;Corinne Schillinger;9782212133707
JavaScript the Definitive Guide;David Flanagan;9780596805524`;

const parsedCsv = new csv(content, {
  header: true,
  delimiter: ';',
});                             // <2>

console.log(parsedCsv.parse()); // <3>
