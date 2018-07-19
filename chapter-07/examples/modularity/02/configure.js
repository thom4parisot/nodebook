'use strict';

const dbPromise = require('./src/database.js');
const routes = require('./src/routes.js');

module.exports = {dbPromise, routes};     // <1>
