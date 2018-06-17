'use strict';
/* eslint curly:0 */

const faker = require('faker/locale/fr');
const args = require('minimist')(process.argv.slice(2));
const [action, ...actionArgs] = args._;                   // <1>

const number = () => faker.random.number();               // <2>
const words = (count=5) => faker.random.words(count);     // <3>
const log = (result) => console.log(result);

if (action === 'words')  log(words(...actionArgs));       // <4>
if (action === 'number') log(number());
