'use strict';

const express = require('express');
const getPokemonName = require('pokemon-random-name');
const app = express();

app.get('/', (request, response) => {
  response.redirect('/pokemon');
});

app.get('/pokemon', (request, response) => {
  return response.send(getPokemonName());
});

app.listen(4000, () => console.log('http://localhost:4000'));
