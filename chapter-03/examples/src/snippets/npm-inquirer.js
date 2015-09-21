'use strict';

var inquirer = require('inquirer');
var sanitize = require('sanitize-filename');

inquirer.prompt({
  name: 'fav-module',
  message: 'Quel module natif Node souhaitez-vous mieux maitriser ?',
  filter: function(input) {
    return sanitize(input);
  },
  validate: function(input){
    try {
      require(sanitize(input));
      return true;
    }
    catch (e){
      return false;
    }
  }
});