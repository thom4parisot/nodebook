'use strict';

const currencies = {
  FR: {
    symbol: '€',
    decimal: ',',
  },
};

const formatNumber = (separator, precision, number) => {
  return number.toFixed(precision).replace('.', separator);
};

const setupFormatter = currencyId => {
  const currency = currencies[currencyId];
  const f = formatNumber.bind(null, currency.decimal, 2);

  return function formatCurrency(amount) {
    return f(amount) + currency.symbol;
  };
};

module.exports = setupFormatter;
