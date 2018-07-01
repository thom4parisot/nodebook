class Product {               // <1>
  constructor() {
    this.title = 'Sans titre';
  }
}

class Book extends Product {  // <2>
  constructor(options) {
    super(options);

    if (options.title) {
      this.title = options.title;
    }
  }
}

const book = new Book({ title: 'Node.js' });
console.log(book.title);    // <3>

const product = new Product({ title: 'Node.js' });
console.log(product.title); // <4>
