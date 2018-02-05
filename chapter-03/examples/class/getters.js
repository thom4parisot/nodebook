class Book {
  constructor({ title, ean13 }) {
    this.title = title;
    this.ean13 = ean13;
  }

  get isbn() {
    return this.ean13.slice(3);
  }
}

const nodebook = new Book({ title: 'Node.js', ean13: '9782212139938' });

console.log(nodebook.ean13);  // <1>
console.log(nodebook.isbn);   // <2>
