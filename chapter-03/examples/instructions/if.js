'use strict';

const book = {
  title: 'Node.js',
  published: true
};

if (book.published && book.title) {
  console.log('Le livre est publié (et a un titre)');
}
