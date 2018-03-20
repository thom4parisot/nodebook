class Book {
  constructor({ title, ean13 }) {
    this.title = title;
    this.ean13 = ean13;
  }

  get isbn() {                // <1>
    return this.ean13.slice(3);
  }
}

const nodebook = new Book({ title: 'Node.js', ean13: '9782212139938' });

console.log(nodebook.ean13);  // <2>
console.log(nodebook.isbn);   // <3>
