'use strict';

const {prompt} = require('inquirer');

const questions = [
  { name: 'name', message : 'Quel est ton nom ?' },
  { name: 'age', message: (answers) => {            // <1>
    return `Quel âge as-tu ${answers.name} ?`;      // <2>
  }}
];

prompt(questions).then(answers => {
  console.log(`${answers.name}, tu as ${answers.age} ans.`);
});
