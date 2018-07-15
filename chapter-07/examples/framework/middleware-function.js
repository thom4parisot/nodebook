'use strict';

const app = require('express')();
const {random} = require('pokemon');

const pokéMiddleware = (request, response, next) => {
  response.locals.pokemon = random();
  next();
};

const affichePoké = (request, response) => {        // <1>
  const {pokemon} = response.locals;
  response.send(`Pokémon aléatoire : ${pokemon}`);
};

app.get('/', pokéMiddleware, affichePoké);          // <2>
app.get('/rondoudou', affichePoké);                 // <3>

app.listen(4000);
