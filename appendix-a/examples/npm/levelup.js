'use strict';

const levelup = require('levelup');
const memdown = require('memdown');
const uuid = require('uuid').v4;

const db = levelup(memdown());
const options = { valueEncoding: 'json' };

db.batch()
  .put(uuid(), { title: 'Node.js' }, options)
  .put(uuid(), { title: 'CSS maintenables' }, options)
  .put(uuid(), { title: 'Open Sky' }, options)
  .write((err) => {
    if (err) {
      return console.error(err);
    }

    console.log('Enregistrements créés en mémoire.');
  });
