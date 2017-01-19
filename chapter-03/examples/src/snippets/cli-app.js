'use strict';

const Users = require('../lib/models/user.js');
const argv = require('yargs')
  .options('y', {
    alias: 'year',
    default: (new Date()).getUTCFullYear()
  })
  .argv;

Users
  .findBy('registration_date', argv.year)
  .on('data', (user) => console.log(user))
  .on('error', (err) => console.error(err));
