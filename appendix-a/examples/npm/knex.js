'use strict';

const db = require('knex')({
  client: 'sqlite3',
  connection: {
    // filename: path.join(__dirname, '..', '..', 'db.sqlite')
    filename: ':memory:'
  }
});

db.schema.dropTableIfExists('books')
  .then(() => {
    return db.schema.createTable('books', table => {
      table.increments('id').primary();

      table.string('title');
      table.timestamp('created_at').defaultTo(db.raw('CURRENT_TIMESTAMP'));
    });
  })
  .then(() => {
    return Promise.all([
      db.insert({ title: 'Node.js '}).into('books'),
      db.insert({ title: 'CSS maintenables '}).into('books'),
      db.insert({ title: 'Open Sky'}).into('books')
    ])
  })
  .then(() => db('books').where('title', 'like', '%Node%'))
  .then(rows => console.log(rows))
  .then(db.destroy.bind(db));
