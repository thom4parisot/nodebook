'use strict';

const app = require('express')();
const {join} = require('path');
const DEFAULT_DB = join(
  __dirname, '..', 'framework', 'db.sqlite'
);

const {dbPromise, routes} = require('./configure')({
  dbUrl: DEFAULT_DB
});

dbPromise.then((db) => {
  app.get('/books/:id', routes.books(db));

  app.listen(4000);
});
