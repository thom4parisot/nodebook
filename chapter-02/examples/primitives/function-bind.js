'use strict';

const FR = {
  capitalCity: 'Paris',
  currency: 'EUR',
};

const UK = {
  capitalCity: 'London',
  currency: 'GBP',
};

const formatCurrency = function(amount) {
  return `${amount} ${this.currency}`;
};

const priceInEUR = formatCurrency.bind(FR);
const priceInGBP = formatCurrency.bind(UK);

console.log(priceInEUR(100)); // <1>
console.log(priceInGBP(100)); // <2>
