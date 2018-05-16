'use strict';

const express = require('express');
const getPokemonName = require('pokemon-random-name');
const PORT = (process.env.PORT || 4000);
const app = express();

app.get('/', (request, response) => {
  response.redirect('/pokemon');
});

app.get('/pokemon', (request, response) => {
  response.set('Content-Type', 'text/plain; charset=utf-8');

  return response.send(getPokemonName());
});

app.listen(PORT, console.log(`http://localhost:${PORT}`));
