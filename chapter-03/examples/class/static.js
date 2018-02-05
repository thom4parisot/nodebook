class Book {
  constructor({ title, ean13 }) {
    this.title = title;
    this.ean13 = ean13;
  }

  static clean(value) {
    return value.replace(/\D/g, '');
  }
}

const nodebook = new Book({
  title: 'Node.js',
  ean13: Book.clean('978-2212139938'),  // <1>
});

console.log(nodebook.ean13);            // <2>
console.log(nodebook.clean);            // <3>
