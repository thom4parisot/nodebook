'use strict';

const app = require('express')();
const {dbPromise, routes} = require('./configure'); // <1>

dbPromise.then((db) => {
  app.get('/books/:id', routes.books(db));          // <2>

  app.listen(4000);
});
