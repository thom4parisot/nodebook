'use strict';

const app = require('express')();
const dbPromise = require('./src/database.js'); // <1>
const routes = require('./src/routes.js');      // <2>

dbPromise.then(() => {
  app.get('/books/:id', routes.books);          // <3>

  app.listen(4000);
});
