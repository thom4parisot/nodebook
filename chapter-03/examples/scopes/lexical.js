'use strict';

const book = {
  title: 'Node.js',
  published: true
};

if (book.published) {
  const price = 32;

  console.log(`Le livre ${book.title} coûte ${price}€.`);
}

console.log(`Le livre ${book.title} coûte ${price}€.`);
