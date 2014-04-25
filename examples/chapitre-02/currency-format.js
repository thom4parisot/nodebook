'use strict';

var currencies = {
  FR: {
    symbol: '€',
    decimal: ','
  }
};

function formatNumber(separator, precision, number){
  return number.toFixed(precision).replace('.', separator);
}

module.exports = function setupFormatter(currencyId){
  var currency = currencies[currencyId];
  var f = formatNumber.bind(null, currency.decimal, 2);

  return function formatCurrency(amount){
    return f(amount) + currency.symbol;
  };
};