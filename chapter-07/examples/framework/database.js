'use strict';

const app = require('express')();
const sqlite = require('sqlite');
const {join} = require('path');

sqlite.open(join(__dirname, 'db.sqlite')).then(db => {  // <1>
  app.get('/', (req, res) => res.redirect('book/1'));

  app.get('/book/:id', (request, response) => {
    const {id} = request.params;
    db.get('SELECT * from books WHERE id = ?', id)      // <2>
      .then(record => {                                 // <3>
        record
          ? response.send(record)                       // <4>
          : response.status(404).send('Livre inconnu');
      });
  });

  app.listen(4000);
});
