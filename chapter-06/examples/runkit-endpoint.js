'use strict';

const pokemon = require('pokemon-random-name'); // <1>

exports.endpoint = (request, response) => {     // <2>
  response.end(pokemon());
};
