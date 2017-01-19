'use strict';

const levelup = require('levelup');
const dbPath = require('path').join(__dirname, '..', '..', 'level.db');
const uuid = require('uuid').v4;

const db = levelup(dbPath);

db.batch()
  .put(uuid(), { title: 'Node.js' }, { valueEncoding: 'json' })
  .put(uuid(), { title: 'CSS maintenables' }, { valueEncoding: 'json' })
  .put(uuid(), { title: 'Open Sky' }, { valueEncoding: 'json' })
  .write((err) => {
    if (err) {
      return console.error(err);
    }

    console.log('Enregistrements créés.');
  });
