'use strict';

const book = {
  title: 'Node.js – bonnes pratiques de programmation modulaire',
};

Object.defineProperties(book, {
  // <1>
  date_published: {
    set: function(date) {
      // <2>
      if (isNaN(Date.parse(date))) {
        throw new Error('Invalid date given: ' + date);
      } else {
        this._published_at = new Date(date); // <3>
      }
    },
    get: function() {
      // <4>
      return this._published_at;
    },
  },
});

book.date_published = '2017-05-01'; // <5>
console.log(book.date_published instanceof Date); // <6>
book.date_published = '2017-05-0'; // <7>
