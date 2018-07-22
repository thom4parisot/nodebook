'use strict';

const sqlite = require('sqlite');

const connect = (db_path) => sqlite.open(db_path);  // <1>

module.exports = connect;                           // <2>
