'use strict';

class Book {
  constructor(title) {
    this.title = title;
    this.GS1;
    this.ISBN;
  }

  get EAN13() {
    return this.GS1 + '-' + this.ISBN;
  }

  set EAN13(value) {
    const EAN13 = value.split('-');

    this.GS1 = EAN13[0];
    this.ISBN = EAN13[1];
  }
}

const cssBook = new Book('CSS maintenables');
cssBook.EAN13 = '978-2212136401';

console.log(cssBook.GS1); // <1>
console.log(cssBook.ISBN); // <2>
console.log(cssBook.EAN13); // <3>
