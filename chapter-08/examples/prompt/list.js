'use strict';

const {prompt} = require('inquirer');

prompt([
  { name: 'type',
    type: 'list',                     // <1>
    message : 'Tu fais quoi lundi ?',
    choices: [                        // <2>
      'Je quitte mon job',
      'Je pars en vacances',
      'J\'apprends Node.js'
    ]
  }
]);
