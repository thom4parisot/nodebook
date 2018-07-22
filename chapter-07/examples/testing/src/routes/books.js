'use strict';

module.exports = (db) => {                          // <1>
  return (request, response) => {                   // <2>
    const {id} = request.params;

    return db.get('SELECT * from books WHERE id = ?', id)
      .then(record => {
        if (!record) {
          return response.status(404).send('Livre inconnu');
        }

        response.send(record);
      });
  };
};
