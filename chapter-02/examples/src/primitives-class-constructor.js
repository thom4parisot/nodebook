'use strict';

class Book{
  constructor(title) {
    this.title = title;
  }
}

var nodeBook = new Book('Node.js');

console.log(typeof nodeBook);					// <1>
console.log(nodeBook instanceof Book);				// <2>
console.log(Object.getPrototypeOf(nodeBook) === Book.prototype);// <3>
