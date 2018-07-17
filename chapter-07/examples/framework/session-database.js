'use strict';

const app = require('express')();
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);// <1>
const {random} = require('pokemon');

app.use(session({
  secret: 'fromage',
  store: new SQLiteStore('./sessions')                  // <2>
}));

app.get('/', (req, res) => {
  req.session.pokemon = random();                       // <3>
  res.redirect('my-pokemon');
});

app.get('/my-pokemon', (request, response) => {
  const {pokemon} = request.session;
  response.send(`Mon Pokémon en session : ${pokemon}`);
});

app.listen(4000);
