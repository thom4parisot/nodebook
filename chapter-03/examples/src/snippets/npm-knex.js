'use strict';

var Promise = require('bluebird');
var db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: require('path').join(__dirname, '..', '..', 'db.sqlite')
  }
});

db.schema.dropTableIfExists('books')
  .then(function(){
    return db.schema.createTable('books', function (table) {
      table.increments('id').primary();

      table.string('title');
      table.timestamp('created_at').defaultTo(db.raw('CURRENT_TIMESTAMP'));
    });
  })
  .then(function(){
    return Promise.all([
      db.insert({ title: 'Node.js '}).into('books'),
      db.insert({ title: 'CSS maintenables '}).into('books'),
      db.insert({ title: 'Open Sky'}).into('books')
    ])
  })
  .finally(db.destroy.bind(db));


