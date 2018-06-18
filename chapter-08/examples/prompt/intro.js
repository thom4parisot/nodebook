'use strict';

const readline = require('readline');
const rl = readline.createInterface({             // <1>
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est ton nom ? ', (answer) => {  // <2>
  console.log(`Coucou ${answer} !`);

  rl.close();                                     // <3>
});
