'use strict';

const cities = ['Bordeaux', 'Toulouse', 'Montpellier', 'Aix-en-Provence'];

const [chocolatineCity, ...trueSouth] = cities;  // <1>

console.log(chocolatineCity);// <2>
console.log(trueSouth);      // <3>
console.log(cities);         // <4> 
