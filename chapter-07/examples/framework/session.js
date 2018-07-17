'use strict';

const app = require('express')();
const session = require('express-session');
const {random} = require('pokemon');

app.use(session({ secret: 'fromage' }));               // <1>

app.get('/', (req, res) => {
  req.session.pokemon = random();                      // <2>
  res.redirect('my-pokemon');
});

app.get('/my-pokemon', (request, response) => {
  const {pokemon} = request.session;
  response.send(`Mon Pokémon en session : ${pokemon}`);// <3>
});

app.listen(4000);
