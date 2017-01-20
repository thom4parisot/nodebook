'use strict';

const inquirer = require('inquirer');
const sanitize = require('sanitize-filename');

inquirer.prompt({
  name: 'fav-module',
  message: 'Quel module natif Node souhaitez-vous mieux maitriser ?',
  filter: (input) => sanitize(input),
  validate: (input) => {
    try {
      // eslint-disable-next-line global-require
      require(sanitize(input));
      return true;
    }
    catch (e){
      return false;
    }
  }
});
