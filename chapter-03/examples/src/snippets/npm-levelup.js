'use strict';

var levelup = require('levelup');
var dbPath = require('path').join(__dirname, '..', '..', 'level.db');
var uuid = require('uuid').v4;

var db = levelup(dbPath);

db.batch()
  .put(uuid(), { title: 'Node.js' }, { valueEncoding: 'json' })
  .put(uuid(), { title: 'CSS maintenables' }, { valueEncoding: 'json' })
  .put(uuid(), { title: 'Open Sky' }, { valueEncoding: 'json' })
  .write(function(err){
    if (err) {
      return console.error(err);
    }

    console.log('Enregistrements créés.');
  });