'use strict';

module.exports = {
  up (database) {
    return database.createTable('fromages', { // <1>
      columns: {
        id: {                                 // <2>
          type: 'int',
          primaryKey: true,
          autoIncrement: true
        },
        name: {                               // <3>
          type: 'string'
        }
      }
    });
  }
}
