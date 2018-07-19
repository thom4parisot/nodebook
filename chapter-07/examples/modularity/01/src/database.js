'use strict';

const sqlite = require('sqlite');
const {join} = require('path');

const db_dir = join(
  __dirname, '..', '..', '..', 'framework'              // <1>
);

module.exports = sqlite.open(join(db_dir, 'db.sqlite'));// <2>
