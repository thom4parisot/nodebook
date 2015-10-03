'use strict';

const FR = {
  capitalCity: 'Paris',
  currency: 'EUR'
};

const UK = {
  capitalCity: 'London',
  currency: 'GBP'
};

let formatCurrency = function(amount){
  return amount + ' ' + this.currency;
};

var priceInEUR = formatCurrency.bind(FR);
var priceInGBP = formatCurrency.bind(UK);

console.log(priceInEUR(100));  // <1>
console.log(priceInGBP(100));  // <2>
