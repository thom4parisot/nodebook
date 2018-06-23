'use strict';

const {random} = require('faker/locale/fr');
const yargs = require('yargs');

const number = () => random.number();
const words = (count=5) => random.words(count);

yargs
  .locale('fr')
  .command('words [count]', 'Des mots', {}, (args) => { // <1>
    console.log(words(args.count));                     // <2>
  })
  .command('number', 'Un nombre', {}, () => {
    console.log(number());
  })
  .argv;
