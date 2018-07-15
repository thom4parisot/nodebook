'use strict';

const app = require('express')();
const {random} = require('pokemon');

app.use((request, response, next) => {            // <1>
  response.locals.pokemon = random();             // <2>
  next();                                         // <3>
});

app.get('/', (request, response) => {
  const {pokemon} = response.locals;              // <4>
  response.send(`Pokémon aléatoire : ${pokemon}`);// <5>
});

app.listen(4000);
