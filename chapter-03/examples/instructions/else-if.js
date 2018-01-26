'use strict';

const book = {
  title: 'Node.js',
  published: true
};

if (book.published && book.title) {
  console.log('Le livre est publié avec un titre.');
}
else if (book.published) {
  console.log('Le livre est publié (sans titre).');
}
else {
  console.log('Le livre n\'est pas publié.');
}
