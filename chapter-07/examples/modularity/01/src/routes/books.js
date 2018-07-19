'use strict';

const dbPromise = require('../database.js');          // <1>

module.exports = (request, response) => {
  const {id} = request.params;
  dbPromise.then(db => {                              // <2>
    db.get('SELECT * from books WHERE id = ?', id)
      .then(record => {
        if (!record) {
          return response.status(404).send('Livre inconnu');
        }

        response.send(record);
      });
  });
};
