'use strict';

const helloSomething = (text) => {
  console.log('Hello ' + text);
};

const helloWorld = helloSomething.bind(null, 'World');
const helloParis = helloSomething.bind(null, 'Paris');

helloWorld();           // <1>
helloParis();           // <2>
helloSomething('Paris');// <2>
