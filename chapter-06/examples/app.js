'use strict';

const express = require('express');
const getPokemonName = require('pokemon-random-name');
const app = express();
const PORT = (process.env.PORT || 4000);

app.get('/', (req, res) => res.redirect('/pokemon'));
app.get('/pokemon', (req, res) => {
  return res.send(`[cluster #${process.env.pm_id}] ${getPokemonName()}`);
});

app.get('/crash', () => {
  throw new Error('Crash applicatif.');
});

app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  next();
});

app.listen(PORT, console.log(`http://localhost:${PORT}`));
