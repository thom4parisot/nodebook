'use strict';

const pokemon = require('pokemon-random-name');

exports.endpoint = (request, response) => {
  response.end(pokemon());
};
