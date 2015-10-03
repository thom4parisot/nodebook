'use strict';

let helloSomething = (text) => {
  console.log('Hello ' + text);
};

let helloWorld = helloSomething.bind(null, 'World');
let helloParis = helloSomething.bind(null, 'Paris');

helloWorld();           // <1>
helloParis();           // <2>
helloSomething('Paris');// <2>
