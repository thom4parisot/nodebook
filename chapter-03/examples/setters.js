const book = {
  title: 'Node.js',
  set ean13 (value) {     // <1>
    this.issn = value.slice(0, 3);
    this.isbn = value.slice(3);
  }
}

book.ean13 = '9782212139938';

console.log(book.issn);   // <2>
console.log(book.isbn);   // <3>
console.log(book.ean13);  // <4>
