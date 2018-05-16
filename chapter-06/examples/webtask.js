'use strict';

const getPokemonName = require('pokemon-random-name');

module.exports = (context, send) => {     // <1>
  return send(null, getPokemonName());
};
