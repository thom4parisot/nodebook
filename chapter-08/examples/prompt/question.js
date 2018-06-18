'use strict';

const {prompt} = require('inquirer');

const questions = [
  { name: 'name', message : 'Quel est ton nom ?' }, // <1>
];

prompt(questions).then(answers => {                 // <2>
  console.log(`Coucou ${answers.name} !`);          // <3>
});
