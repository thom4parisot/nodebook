'use strict';

const connect = require('./src/database.js');
const routes = require('./src/routes.js');

module.exports = ({ dbUrl }) => ({
  dbPromise: connect(dbUrl),
  routes
});
