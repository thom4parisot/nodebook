'use strict';

var Users = require('../lib/models/user.js');
var argv = require('yargs')
  .options('y', {
    alias: 'year',
    default: (new Date()).getUTCFullYear()
  })
  .argv;


Users
  .findBy('registration_date', argv.year)
  .on('data', function(user){
    console.log(user);
  })
  .on('error', function(err){
    console.error(err);
  });