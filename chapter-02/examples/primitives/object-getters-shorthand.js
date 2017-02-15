'use strict';

const book = {
  title: 'Node.js – bonnes pratiques de programmation modulaire',
  set date_published(date) {
    // <1>
    if (isNaN(Date.parse(date))) {
      throw new Error('Invalid date given: ' + date);
    } else {
      this._published_at = new Date(date);
    }
  },
  get date_published() {
    return this._published_at;
  },
  get year_published() {
    // <2>
    return this.date_published.getFullYear();
  },
};

book.date_published = '2017-05-01';
book.year_published = '2014'; // <3>
