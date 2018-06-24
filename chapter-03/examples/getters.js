const book = {
  title: 'Node.js',
  ean13: '9782212139938',
  get isbn() {            // <1>
    return this.ean13.slice(3);
  }
}

console.log(book.ean13);  // <2>
console.log(book.isbn);   // <3>
