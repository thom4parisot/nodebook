'use strict';

module.exports = async (db) => {
  await db.run(`CREATE TABLE books
  (id INTEGER PRIMARY KEY, title VARCHAR, isbn VARCHAR);`);

  await db.run(`INSERT INTO books (title, isbn) VALUES
  ("Design Systems", "978-3945749586"),
  ("Sass pour les web designers", "977-2212141474"),
  ("Node.js", "978-2212139938");`);

  return db;
}
