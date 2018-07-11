'use strict';

const {join} = require('path');

const db = require('knex')({
  client: 'sqlite3',                            // <1>
  connection: {
    filename: join(__dirname, 'sample.sqlite')  // <2>
  }
});

Promise.all([
  db('books').where('title', 'like', '%Node%'), // <3>
  db('books').count('title as count').first(),  // <4>
])
.then(([rows, count]) => {
  console.log(rows);                            // <5>
  console.log(count);                           // <6>
  db.destroy();
});
