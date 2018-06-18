'use strict';

const {prompt} = require('inquirer');
const secret_number = Math.floor(Math.random() * 100);

const questions = [
  { name: 'Devine le nombre secret (entre 1 et 100)',
    validate: (input, answers) => {
      if (Number.isNaN(parseInt(input))) {    // <1>
        return 'Ce n\'est pas un nombre';     // <2>
      }
      if (input > secret_number) {
        return 'C\'est plus petit.';
      }
      if (input < secret_number) {
        return 'C\'est plus grand.';
      }
      return true;                            // <3>
  }}
];

prompt(questions).then(answers => {
  console.log(`Bravo, la réponse est ${secret_number} !`);
});
