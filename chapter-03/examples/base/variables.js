'use strict';

const book = {
  title: 'Node.js',
  isbn: '978-2212139938',
  published: true
};

const base_price = 13;

function double(value) {
  return value * 2;
}

book.price = double(base_price);
