'use strict';

const {random} = require('faker/locale/fr');

module.exports = {
  command: 'number',
  desc: 'Génère un nombre',
  handler: () => console.log(random.number())
};
