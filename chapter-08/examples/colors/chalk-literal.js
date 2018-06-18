'use strict';

const chalk = require('chalk');

console.log(chalk`{magentaBright Hello} World`);
console.log(chalk`{green.italic Hello} World`);
console.log(chalk`{bgRed Hello} World`);

console.log(chalk`{rgb(255,69,0) Hello} World`);
